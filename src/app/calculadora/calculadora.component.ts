import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  titulo: String = 'Calculadora';
  a: number = 0;
  b: number = 0;
  suma: number = 0;
  operacion: string = '';
  opDesab: boolean = true;

  sumar() {
    if(this.operacion==='+')
    this.a = this.a + this.b;
    if(this.operacion==='-')
    this.a = this.a - this.b;
    if(this.operacion==='*')
    this.a = this.a * this.b;
    if(this.operacion==='/')
    this.a = this.a / this.b;

    console.log(this.a);
    this.b=0;
    this.operacion='';
    this.opDesab =false;
  }
  agregamosNumero(e: number) {
    console.log('Agregamos numero');

    if (this.operacion.length > 0) {
      let m = Math.floor(Math.log10(this.b) + 1);
      if (m <= 5) {
        this.b = this.b * 10 + e;
      }

    } else {
      let m = Math.floor(Math.log10(this.a) + 1);
      if (m <= 5) {
        this.a = this.a * 10 + e;
      }
      this.opDesab=false;
    }
  }
  sePuedeSumar():boolean{
    if(this.a!=0 && this.b!=0){
      return false;
    }else{
      return true;
    }
  }

  realizamosOperacion(v: string) {
    console.log(v);
    if (!this.opDesab) {
      //estabn habilitados
      this.operacion = v;
      //desabilitamos opeeradores
      this.opDesab = true;
    } else {
      console.log('esperamos operacion....');
    }
  }
}
