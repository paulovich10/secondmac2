import { Injectable } from '@angular/core';
import { Opinion } from './models/opinion.model';
import { OPINIONES } from './db/opiniones.db';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getAllOpiniones(): Promise<Opinion[]>{
    return new Promise<Opinion[]> ((resolve, reject)=>{

      resolve (OPINIONES);
      //console.log(OPINIONES)
    })
  }

 
}
