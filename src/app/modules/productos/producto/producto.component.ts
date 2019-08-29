import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { Producto } from '../producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto = new Producto('');
  id: string;

  constructor( private productosService: ProductosService ,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    if ( this.id !== 'nuevo' ) {
      this.productosService.get( this.id ).subscribe(
        (resp: Producto) => {
          this.producto = resp;
          this.producto.id = this.id;
          console.log(this.producto);
         }
      );
    }

  }

  save( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no valido');
      return;
    }

    if ( this.producto.id ) {
      this.productosService.update( this.producto ).subscribe();
    } else  {
      this.productosService.create( this.producto ).subscribe();
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

    if ( this.producto.id ) {
      peticion = this.productosService.update( this.producto );
    } else  {
      peticion = this.productosService.create( this.producto );
    }

    peticion.subscribe ( resp => {
      console.log( resp );
      Swal.fire({
        title: this.producto.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'
      });
    });
  }

}
