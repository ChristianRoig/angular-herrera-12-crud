import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { PersonasService } from './personas.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[];

  cargando = false;

  constructor( private personasService: PersonasService ) { }

  ngOnInit() {

    this.personas = this.personasService.getPersonas();

  }

  delete(persona: Persona, i: number ) {

    Swal.fire( {
      title: '¿Esta seguro?',
      text: `Esta seguro que desea borrar a ${ persona.nombre }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.personas.splice(i, 1);
        // this.personasService.delete persona.id ).subscribe();
      }

    });


  }


}
