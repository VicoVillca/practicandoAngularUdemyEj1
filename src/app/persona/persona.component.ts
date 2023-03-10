import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../personas/personas.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  @Input() index:number=0;
  @Input() persona:Persona=new Persona("","");
}
