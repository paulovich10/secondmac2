import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formulario: FormGroup;
  constructor(private usuariosService: UsuariosService) {

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
        if (response['nickname']) {
          console.log(response)
        } else if (response['error']) {

          alert(response['error'])
        }

      })

      .catch(err => {
        console.log(err)
        alert('Error en el registro. Inténtalo más tarde. 2');

      })
  }





}




