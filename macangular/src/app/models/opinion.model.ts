export class Opinion {

    id: number;
    nombre: string;
    imagen: string;
    texto: string;

    constructor (pId, pNombre, pImagen, pTexto) {

        this.id = pId;
        this.nombre = pNombre;
        this.imagen = pImagen;
        this.texto = pTexto;
    }
}

    