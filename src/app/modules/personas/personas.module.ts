import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [PersonasComponent, PersonaComponent],
  imports: [
    CommonModule
  ]
})
export class PersonasModule { }
