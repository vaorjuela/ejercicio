import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: string, arg: number): number {

    let numero = parseInt(value, 16);
    numero = Math.pow(numero, 2);

    return numero;
  }

}
