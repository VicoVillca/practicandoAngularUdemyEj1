import { Component,Output,EventEmitter} from '@angular/core';
import { Persona } from '../personas/personas.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

@Output() personaCreada = new EventEmitter<Persona>();
  nombre: string = '';
  apellido: string = '';

  agregar() {
    let persona = new Persona(this.nombre, this.apellido);
    //this.lista.push(new Persona(this.nombre, this.apellido));
    this.nombre = '';
    this.apellido = '';
    this.personaCreada.emit(persona);
  }
}
