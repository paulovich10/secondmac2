import { Injectable } from '@angular/core';
import { PRODUCTOS } from './db/productos.bd';
import { MODELOS } from './db/productos.bd';
import { Producto } from './models/producto.model';
import { Modelo } from './models/modelo.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() {
  }


getAllProductos(): Promise<Producto[]>{
    return new Promise<Producto[]> ((resolve, reject)=>{
      resolve (PRODUCTOS);
    })
  }
getAllModelos(): Promise<Modelo[]>{
  return new Promise <Modelo[]> ((resolve, reject)=>{
    resolve (MODELOS);
  })
}


}

