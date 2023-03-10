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

  agregar(persona:Persona){
    console.log("Agregamos persona en el padre");
    this.lista.push(persona);
  }
}
