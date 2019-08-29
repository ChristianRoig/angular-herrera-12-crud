import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url = 'https://crudherrera.firebaseio.com';
  private sufix = '.json'; // sufijo firebase

  constructor( private http: HttpClient ) { }

  create( persona: Persona ) {

    return this.http.post(`${ this.url }/personas${ this.sufix }`, persona )
        .pipe(
            map( (resp: any) => {
              persona.id = resp.name;
              return persona;
            })
      );
  }

  // Retrieves
  get( id: string ) {

    const p = this.http.get(`${ this.url }/personas/${ id }${ this.sufix }`);

    return p;

  }

  getAll() {

    const l = this.http.get(`${ this.url }/personas${ this.sufix }`)
      .pipe( map( this.crearArreglo ), delay(0) );

    return l;

  }

  update( persona: Persona ) {

    const personaTemp = { ...persona };
    delete personaTemp.id;

    const p = this.http.put(`${ this.url }/personas/${ persona.id }${ this.sufix }`, personaTemp );
    return p;

  }

  delete( id: string ) {

    return this.http.delete(`${ this.url }/personas/${ id }${ this.sufix }`);

  }

  // Funciones auxiliares
  private crearArreglo( personasObj: object ) {

    const personas: Persona[] = [];

    if ( personasObj === null ) { return []; }

    Object.keys( personasObj ).forEach( key => {

      const persona: Persona = personasObj[key];
      persona.id = key;

      personas.push ( persona );

    });

    return personas;
  }
}
