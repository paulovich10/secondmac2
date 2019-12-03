import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService, private router: Router) {

    this.formulario = new FormGroup({
      email: new FormControl('', [

      ]),

      contrasenha: new FormControl('', [

      ])


    })

  }

  ngOnInit() {
  }

  onSubmit() {

    this.usuariosService.login(this.formulario.value)

      .then(response => {
        console.log(response)

      })

      .catch(err => {

        console.log(err)
      })
  }


}
