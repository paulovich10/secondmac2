import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto.model'
import { Modelo } from '../models/modelo.model';
import { Capacidad } from '../models/capacidad.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  arrProductos: Producto[];
  producto: Producto[];
  arrModelos: Producto[];
  productoSeleccionado: Producto;
  arrCapacidades: Capacidad[];

  constructor(private productoServicio: ProductosService) {

    this.arrProductos = [];
    this.arrModelos = [];
    this.productoSeleccionado = new Producto(1, 'Iphone');
    this.arrCapacidades = [];
  }

  ngOnInit() {
<<<<<<< HEAD

    this.iniciarArray();
    //al seleccionar en el desplagabla un producto, me traigo el id y se lo paso por parametro a 
    this.onSelect(this.productoSeleccionado.id);

  }

  iniciarArray() {

    this.arrProductos = this.productoServicio.getAllProductos();
    this.arrCapacidades = this.productoServicio.getAllCapacidades();

  }

  onSelect(productoId) {
    this.arrModelos = this.productoServicio.getAllModelos().filter((modelo) => modelo.productoId == productoId)
=======
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
>>>>>>> 2a5b619650457364eac64a78270b5be848f1e707
  }
}

