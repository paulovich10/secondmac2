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

    this.baseUrl = "http://localhost/3000/api/usuarios"
  }

  getAllOpiniones(): Promise<Opinion[]> {
    return new Promise<Opinion[]>((resolve, reject) => {
      resolve(OPINIONES);
      // console.log(OPINIONES)
    })
  }

  create(values): Promise<any> {

    return this.http.post<any>(`${this.baseUrl}/registro`, values).toPromise();


  }

}




