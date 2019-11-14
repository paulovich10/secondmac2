import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto.model'
import { Capacidad } from '../models/capacidad.model';
import { Ram } from '../models/ram.model'

@Component({
  selector: 'app-computer-reg',
  templateUrl: './computer-reg.component.html',
  styleUrls: ['./computer-reg.component.css']
})
export class ComputerRegComponent implements OnInit {

  arrProductos: Producto[];
  producto: Producto[];
  arrModelos: Producto[];
  productoSeleccionado: Producto;
  arrCapacidades: Capacidad[];
  arrRam: Ram[];

  constructor(private productoServicio: ProductosService) {

    this.arrProductos = [];
    this.arrModelos = [];
    this.productoSeleccionado = new Producto(1, 'Iphone');
    this.arrCapacidades = [];
    this.arrRam = [];
  }

  ngOnInit() {

    this.iniciarArray();
    //al seleccionar en el desplagabla un producto, me traigo el id y se lo paso por parametro a 
    this.onSelect(this.productoSeleccionado.id);
  }

  iniciarArray() {

    this.arrProductos = this.productoServicio.getAllProductos();
    this.arrCapacidades = this.productoServicio.getAllCapacidades();
    this.arrRam = this.productoServicio.getAllRam();

  }

  onSelect(productoId) {
    this.arrModelos = this.productoServicio.getAllModelos().filter((modelo) => modelo.productoId == productoId)


  }


}
