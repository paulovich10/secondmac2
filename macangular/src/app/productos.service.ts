import { Injectable } from '@angular/core';
import { PRODUCTOS } from './db/productos.bd';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }


getAllProductos(): Promise<Producto[]>{
    return new Promise<Producto[]> ((resolve, reject)=>{
      resolve (PRODUCTOS);
    })
  }


}

