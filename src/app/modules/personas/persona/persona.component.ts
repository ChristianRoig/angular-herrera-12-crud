import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona;
  id: string;

  constructor( private personasService: PersonasService ,
               private route: ActivatedRoute ) { }

ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.persona = this.personasService.getPersona( this.id );

  }

}
