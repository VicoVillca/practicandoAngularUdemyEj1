import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'My App';
  selector:boolean=false;

  calculadora(){
    this.selector=true;
  }
  personas(){
    this.selector=false;
  }
}
