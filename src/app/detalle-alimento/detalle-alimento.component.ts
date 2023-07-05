import { Component, OnInit } from '@angular/core';
import { Comida } from '../interfaces/comida';


@Component({
  selector: 'app-detalle-alimento',
  templateUrl: './detalle-alimento.component.html',
  styleUrls: ['./detalle-alimento.component.css']
})
export class DetalleAlimentoComponent{
  
  comidas:Comida[] = [
    { id: 1, nombre: 'Rucula', tipo: 'Vegano', precio: 100},
    { id: 2, nombre: 'Fideos', tipo: 'Vegetariano', precio: 200},
    { id: 3, nombre: 'Ensalada de tomate y papa', tipo: 'Vegano', precio: 100},
    { id: 4, nombre: 'Pollo relleno', tipo: 'Carne', precio: 400},
    { id: 5, nombre: 'Empanada de carne para celiaco', tipo: 'Celiaco', precio: 500},
    { id: 6, nombre: 'Lasagna de verdura', tipo: 'Vegetariano', precio: 200},
    { id: 7, nombre: 'Pollo con ensalada rusa', tipo: 'Celiaco', precio: 500},
    { id: 8, nombre: 'Tomates rellenos', tipo: 'Vegano', precio: 100},
    { id: 9, nombre: 'Matambre a la pizza', tipo: 'Carne', precio: 400},
    { id: 10, nombre: 'Sopa de verduras', tipo: 'Vegano', precio: 100},

  ];


}
