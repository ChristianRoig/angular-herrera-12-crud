export class Persona {

    fbid: string;
    id: string;
    nombre: string;
    estado: string;

    cod: string;
    nmb: string;
    etq: string;

    direccion: string;
    localidad: string;
    telefono: string;
    correo: string;

    constructor( nombre: string ) {

        this.nombre = nombre;
        this.estado = 'Activo';
        // this.id = 'nuevo';

    }
}
