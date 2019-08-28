import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[];

  constructor( private personasService: PersonasService ) { }

  ngOnInit() {

    this.personas = this.personasService.getPersonas();

  }

}
