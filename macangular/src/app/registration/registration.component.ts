import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formulario: FormGroup;
  parrafoValidacion: boolean;
  parrafoNegacion: boolean;
  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.parrafoValidacion = false;
    this.parrafoNegacion = false;

    this.formulario = new FormGroup({
      email: new FormControl('', [

      ]),
      nickname: new FormControl('', [

      ]),

      contrasenha: new FormControl('', [

      ])


    })


  }

  ngOnInit() {




  }

  onSubmit() {

    this.usuariosService.create(this.formulario.value)
      .then(response => {
        //del back viene token con su expiracion y cuándo se creó por lo que lo almaceno en el localstorage de las cabeceras el token con su clave y el usuario--> esto me devolverá user-token: token codificado, username: lo que sea.
        // if (response['usuario']) {
        //   // localStorage.setItem('user-token', response['token']);
        //   // localStorage.setItem('username', response['username']);
        //   console.log(response['usuario'])

        // } else if (response['error']) {

        //   alert(response['error']);
        // }

        console.log(response);
        alert('usuario dado de alta correctamente')
        this.router.navigate(['/computer'])
      })

      .catch(err => {
        console.log(err)
        alert('Error en el registro. Inténtalo más tarde. 2');

      })
  }





}




