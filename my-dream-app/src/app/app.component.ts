import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-ejercicio';

  name = 'ingenieria de sistemas en el poli ';
  fecha = new Date();
  fechaAnterior = new Date("2020-10-27T12:00:00Z");
  fechaAnterior2 = new Date("2020-10-27T22:00:00Z");
  fechaAnterior3 = new Date("2020-10-26T23:59:00Z");
  fechaAnterior4 = new Date("2020-10-27T19:00:00Z");
  fechaAnterior5 = new Date("2020-09-27T24:00:00Z");
  fechaAnterior6 = new Date("2020-05-27T15:00:00Z");
  texto = 'institucion universitaria politecnico';
  num1 = 8;
  num2 = 24;
  
}
