import { Injectable } from '@angular/core';
import { PRODUCTOS } from './db/productos.bd';
import { MODELOS } from './db/productos.bd';

import { CAPACIDADES } from './db/productos.bd';
import { Producto } from './models/producto.model';
import { Modelo } from './models/modelo.model';
import { Capacidad } from './models/capacidad.model';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor() {
  }


  getAllProductos(): Producto[] {
    return (PRODUCTOS);
  }


  getAllModelos(): Modelo[] {
    return (MODELOS)
  }

  getAllCapacidades(): Capacidad[] {
    return (CAPACIDADES);

  }
}

