import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../models/producto.model'
import { Capacidad } from '../models/capacidad.model';
import { Procesador } from '../models/procesador.model'
import { Ram } from '../models/ram.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Modelo } from '../models/modelo.model';
import { filter } from 'minimatch';
import { element } from 'protractor';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  arrProductos: Producto[];
  producto: Producto[];
  arrModelos: Producto[];
  productoSeleccionado: Producto;
  modeloSeleccionado: Modelo;
  arrCapacidades: Capacidad[];
  arrProcesadores: Procesador[];
  arrRam: Ram[];
  route: any;
  procesador: Procesador[];

  constructor(private productoServicio: ProductosService, private router: Router, private r: ActivatedRoute) {

    this.arrProductos = [];
    this.arrModelos = [];
    this.productoSeleccionado = new Producto(1, 'Iphone');
    this.arrCapacidades = [];
    this.arrRam = [];
    this.arrProcesadores = [];
    this.modeloSeleccionado = new Modelo(1, 1, 'Iphone 11');
    this.procesador = [];




  }
  ngOnInit() {

    this.iniciarArray();
    //al seleccionar en el desplagable un producto, me traigo el id y se lo paso por parametro a 
    this.onSelect(this.productoSeleccionado.id);
    //this.onSelectModel(this.modeloSeleccionado.id);

  }

  iniciarArray() {

    this.arrProductos = this.productoServicio.getAllProductos();
    this.arrCapacidades = this.productoServicio.getAllCapacidades();
    this.arrRam = this.productoServicio.getAllRam();


  }

  onSelect(productoId) {
    this.arrModelos = this.productoServicio.getAllModelos().filter((modelo) => modelo.productoId == productoId);

  }

  onSelectModelo(modeloId) {
    this.arrProcesadores = this.productoServicio.getAllProcesadores()
      .filter(procesador => { return procesador.modeloId.includes(parseInt(modeloId)) }
      )
  }


  processFile(e) {
    console.log(e.target.files[0])
  }

  navigatetoUsuario() {
    this.router.navigate(["registration/usuario"]);

  }

}
