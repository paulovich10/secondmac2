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
  }
}

