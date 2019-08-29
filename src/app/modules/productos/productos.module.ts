import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductosComponent, ProductoComponent],
  imports: [
    CommonModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductosModule { }
