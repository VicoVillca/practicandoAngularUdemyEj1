import { Component, OnInit } from '@angular/core';
import { Persona } from './personas.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  titulo: string = 'Lista de personas';
  lista: Persona[] = [
    new Persona('Juan', 'Mamani'),
    new Persona('Maria', 'Martines'),
  ];
  nombre: string = '';
  apellido: string = '';

  agregar() {
    this.lista.push(new Persona(this.nombre, this.apellido));
    this.nombre = '';
    this.apellido = '';
  }
}
