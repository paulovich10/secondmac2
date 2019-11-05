import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto.model'
import { Modelo } from '../models/modelo.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  arrProductos: Producto[];
  producto: Producto[];
  arrModelos: Modelo[];
  productoSeleccionado: Producto;

  constructor(private productoServicio: ProductosService) {

    this.arrProductos = [];
    this.arrModelos = [];
    this.productoSeleccionado = new Producto(1, 'Iphone');
  }

  ngOnInit() {
    this.productoServicio.getAllProductos()
      .then(arr => {
        this.arrProductos = arr
      })
  }

  iniciarArray() {
    this.productoServicio.getAllProductos()
      .then(arr => {
        this.arrProductos = arr

      })

  }

  async onSelect(productoId) {
    this.arrModelos = await this.productoServicio.getAllModelos()
    let filtrarById = (modelo) =>{
      if (modelo.productoId == productoId) return true
      return false
    }
    try{
      this.arrModelos = this.arrModelos.filter(filtrarById)
      console.log(this.arrModelos)
    }catch(err){
      console.log(err)
    }
  }

}
