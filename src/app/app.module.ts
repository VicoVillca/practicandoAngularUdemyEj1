import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasComponent } from './personas/personas.component';




@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PersonasComponent
  ],
  imports: [BrowserModule, NgbModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
