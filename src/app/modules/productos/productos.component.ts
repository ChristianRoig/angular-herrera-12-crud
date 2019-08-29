import { Component, OnInit } from '@angular/core';

import Swal, { SweetAlertOptions } from 'sweetalert2';

import { ProductosService } from './productos.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  cargando = false;

  constructor( private productosService: ProductosService ) { }

  ngOnInit() {

    this.cargando = true;
    this.productosService.getAll().subscribe (
      resp => {
        this.productos = resp;
        this.cargando = false;
      });

  }

  delete(producto: Producto, i: number ) {

    this.productos.splice(i, 1);
    this.productosService.delete( producto.id ).subscribe();

  }

  // Version con Popup de confirmacion
  deleteCheck(producto: Producto, i: number ) {

    Swal.fire( this.alertDelete( producto.nombre ) ).then( resp => {

      if ( resp.value ) {
        this.productos.splice(i, 1);
        this.productosService.delete( producto.id ).subscribe();
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
