import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getPersonas() {

    return [];

  }

  getPersona( id: string ) {

    return new Persona('Service & Model works - ' + id);

  }

}
