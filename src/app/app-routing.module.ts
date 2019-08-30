import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

import { PersonasComponent } from './modules/personas/personas.component';
import { PersonaComponent } from './modules/personas/persona/persona.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ProductoComponent } from './modules/productos/producto/producto.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },

  { path: 'personas', component: PersonasComponent },
  { path: 'persona/:id', component: PersonaComponent },

  { path: 'clientes', component: PersonasComponent },
  { path: 'cliente/:id', component: PersonaComponent },

  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
