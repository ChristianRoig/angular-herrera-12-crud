import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona('');
  id: string;

  subtype: string;

  constructor( private personasService: PersonasService ,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.subtype = this.route.snapshot.url[0].path;
    console.log( this.subtype );

    if ( this.id !== 'nuevo' ) {
      this.personasService.get( this.id ).subscribe(
        (resp: Persona) => {
          this.persona = resp;
          this.persona.id = this.id;
          console.log(this.persona);
         }
      );
    }

  }

  save( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no valido');
      return;
    }

    if ( this.persona.id ) {
      this.personasService.update( this.persona ).subscribe();
    } else  {
      this.personasService.create( this.persona ).subscribe();
    }

  }

  // Save con popups de espera y confirmación.
  savePop( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Info',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.persona.id ) {
      peticion = this.personasService.update( this.persona );
    } else  {
      peticion = this.personasService.create( this.persona );
    }

    peticion.subscribe ( resp => {
      console.log( resp );
      Swal.fire({
        title: this.persona.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
  }

}
