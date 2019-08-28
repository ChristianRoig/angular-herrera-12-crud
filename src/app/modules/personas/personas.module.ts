import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import { PersonaComponent } from './persona/persona.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PersonasComponent, PersonaComponent],
  imports: [
    CommonModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PersonasModule { }
