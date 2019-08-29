import { Component, OnInit } from '@angular/core';

import Swal, { SweetAlertOptions } from 'sweetalert2';

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

    this.cargando = true;
    this.personasService.getAll().subscribe (
      resp => {
        this.personas = resp;
        this.cargando = false;
      });

  }

  delete(persona: Persona, i: number ) {

    this.personas.splice(i, 1);
    this.personasService.delete( persona.id ).subscribe();

  }

  // Version con Popup de confirmacion
  deleteCheck(persona: Persona, i: number ) {

    Swal.fire( this.alertDelete( persona.nombre ) ).then( resp => {

      if ( resp.value ) {
        this.personas.splice(i, 1);
        this.personasService.delete( persona.id ).subscribe();
      }

    });

  }

  private alertDelete( nombre: string ): SweetAlertOptions {

    return {
      title: '¿Esta seguro?',
      text: `Esta seguro que desea borrar a ${ nombre }`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    };

  }
}
