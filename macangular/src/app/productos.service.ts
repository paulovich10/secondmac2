import { Injectable } from '@angular/core';
import { PRODUCTOS } from './db/productos.bd';
import { MODELOS } from './db/productos.bd';
<<<<<<< HEAD
import { CAPACIDADES } from './db/productos.bd';
import { Producto } from './models/producto.model';
import { Modelo } from './models/modelo.model';
import { Capacidad } from './models/capacidad.model';
=======
import { Producto } from './models/producto.model';
import { Modelo } from './models/modelo.model';
>>>>>>> 2a5b619650457364eac64a78270b5be848f1e707

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() {
  }


  getAllProductos(): Producto[] {
    return (PRODUCTOS);
  }
getAllModelos(): Promise<Modelo[]>{
  return new Promise <Modelo[]> ((resolve, reject)=>{
    resolve (MODELOS);
  })
}

  getAllModelos(): Modelo[] {
    return (MODELOS)
  }

  getAllCapacidades(): Capacidad[] {
    return (CAPACIDADES);

  }
}

