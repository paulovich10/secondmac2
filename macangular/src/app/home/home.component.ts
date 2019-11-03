import { Component, OnInit } from '@angular/core';
import { Opinion } from '../models/opinion.model';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrOpiniones: Opinion[] = [];

 

  constructor(private servicioUsuarios: UsuariosService) { 
  
   
  }

  ngOnInit() {

    this.iniciarArray();
  }

  iniciarArray() {

  this.servicioUsuarios.getAllOpiniones()
  .then(arr =>{
    this.arrOpiniones = arr;    
  })

}


}
