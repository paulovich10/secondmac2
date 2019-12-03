import { Injectable } from '@angular/core';
import { Opinion } from './models/opinion.model';
import { OPINIONES } from './db/opiniones.db';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:3000/api/usuarios"
  }

  getAllOpiniones(): Promise<Opinion[]> {
    return new Promise<Opinion[]>((resolve, reject) => {
      resolve(OPINIONES);
      // console.log(OPINIONES)
    })
  }

  create(values): Promise<any> {
    //console.log(values)
    return this.http.post(`${this.baseUrl}/registro`, values).toPromise();

  }

  login(val): Promise<any> {
    console.log(val)
    return this.http.post(`${this.baseUrl}/login`, val).toPromise();
  }



}




