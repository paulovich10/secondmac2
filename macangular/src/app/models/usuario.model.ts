export class Usuario {

    nombre: string;
    apellidos: string;
    nickname: string;
    email: string;
    contrasenha: string;
    producto: number;



    constructor(pNombre, pApellidos, pNickname, pContrasenha, pEmail, pProducto) {

        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.email = pEmail;
        this.nickname = pNickname;
        this.contrasenha = pContrasenha;
        this.producto = pProducto;

    }

}