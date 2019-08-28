export class Persona {

    id: string;
    nombre: string;
    estado: string;

    constructor( nombre: string ) {

        this.nombre = nombre;
        this.estado = 'Activo';

    }
}
