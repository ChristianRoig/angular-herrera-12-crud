import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getPersonas() {

    // return [];
    return [ new Persona('Emmanuel Ginobili'), new Persona('Lionel Messi') ];


  }

  getPersona( id: string ) {

    const p = new Persona('Lionel Messi' );
    p.id = id;

    return p;

  }

}
