import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texto'
})
export class TextoPipe implements PipeTransform {

  transform(value: string, arg: string): string {
    let newValue = "";
    let indexTemp = 0;

    for (let i = 0; i < value.length; i++) {
      if (indexTemp %2 == 0) {
        newValue += value[i].toUpperCase();
      }else{
        newValue += value[i].toLowerCase();
      }
      if (value[i] != " "){
        indexTemp +=1;
      }
    }
    return newValue;
  }

}
