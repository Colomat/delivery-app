import { Component } from '@angular/core';
import { Comida } from '../interfaces/comida';



@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent {
  


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



  idInput:number = 0;
  nombreInput:string = '';
  tipoInput:string = '';
  precioInput:number = 0;


  nuevoPrecio: number=0;

  tipoComidaSeleccionado: string = '';




  //Metodo para agregar producto. Antes a producto lo tenia como una interface pero no me deja trabajar sino es una clase
  agregarProducto() {
    if (this.idInput !== 0 && this.nombreInput.trim() !== '' && this.tipoInput.trim() !== '' && this.precioInput !== 0) {
      const nuevaComida: Comida = {
        id: this.idInput,
        nombre: this.nombreInput,
        tipo: this.tipoInput,
        precio: this.precioInput
      };
      this.comidas.push(nuevaComida);
    } else {
      alert('Error: Todos los campos deben ser completados.');
    }
  }
  
  
  eliminarComida(comida: Comida) {
    const index = this.comidas.indexOf(comida);
    if (index !== -1) {
      this.comidas.splice(index, 1);
    }
  }



  modificarPrecio(comida: Comida, nuevoPrecio: number) {
    const index = this.comidas.indexOf(comida);
    if (index !== -1) {
      this.comidas[index].precio = nuevoPrecio;
    }
  }

  filtrarComidas() {
    if (this.tipoInput) {
      return this.comidas.filter(comida => comida.tipo === this.tipoInput);
    } else {
      return this.comidas;
    }
  }

 

}






