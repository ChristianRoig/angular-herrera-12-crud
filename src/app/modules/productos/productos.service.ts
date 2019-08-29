import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'https://crudherrera.firebaseio.com';
  private sufix = '.json'; // sufijo firebase

  constructor( private http: HttpClient ) { }

  create( producto: Producto ) {

    return this.http.post(`${ this.url }/productos${ this.sufix }`, producto )
        .pipe(
            map( (resp: any) => {
              producto.id = resp.name;
              return producto;
            })
      );
  }

  // Retrieves
  get( id: string ) {

    const p = this.http.get(`${ this.url }/productos/${ id }${ this.sufix }`);

    return p;

  }

  getAll() {

    const l = this.http.get(`${ this.url }/productos${ this.sufix }`)
      .pipe( map( this.crearArreglo ), delay(0) );

    return l;

  }

  update( producto: Producto ) {

    const productoTemp = { ...producto };
    delete productoTemp.id;

    const p = this.http.put(`${ this.url }/productos/${ producto.id }${ this.sufix }`, productoTemp );
    return p;

  }

  delete( id: string ) {

    return this.http.delete(`${ this.url }/productos/${ id }${ this.sufix }`);

  }

  // Funciones auxiliares
  private crearArreglo( productosObj: object ) {

    const productos: Producto[] = [];

    if ( productosObj === null ) { return []; }

    Object.keys( productosObj ).forEach( key => {

      const producto: Producto = productosObj[key];
      producto.id = key;

      productos.push ( producto );

    });

    return productos;
  }
}
