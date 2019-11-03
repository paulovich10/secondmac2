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
  id: number;
  opinion: any;
 

  constructor(private servicioUsuarios: UsuariosService) { 
    this.id = 0;
    this.opinion = 1;
  }

  onCambiarSlide(action) {
    switch (action){

      case 'prev':
         if(--this.id >= 0) 
         this.opinion = this.arrOpiniones[this.id];
           
         break;
      case 'next':
        if(++this.id <= this.arrOpiniones.length) 
        this.opinion = this.arrOpiniones[this.id];
         break;
        
    }

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
