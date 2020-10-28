import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(value: string, arg: Date): String {
    if (value) {
        const mes = new Date().getMonth();
        const segundos = Math.floor((+new Date() - +new Date(value)) / 1000);
        let mesActual = new Date(value).getMonth();
        console.log(segundos)

        
        if (segundos < 29) 
            return 'Justo ahora';
            const tiempos = {
              'anio': 31536000,
              'mes': 2592000,
              'semana': 604800,
              'dia': 86400,              
              'hora': 3600,
              'minuto': 60,
              'segundo': 1
          };
        if(segundos > tiempos.segundo && segundos <= tiempos.hora){
          return 'Conectado hace pocos minutos';
              } else if(segundos >  tiempos.hora && segundos <= (tiempos.hora*6)){
              return 'Conectado hace pocas horas';
              }else if(segundos > (tiempos.hora*6) && segundos <= (tiempos.hora*12) ){
              return 'Conectado hace menos de 12 horas';                  
              }else if(segundos > (tiempos.hora*12) && segundos <= tiempos.dia){
            return 'Conectado hace menos de 24 horas';        
              }else if(segundos > tiempos.dia && segundos <= tiempos.mes){
                    if (mesActual === mes ){
                      return 'Conectado este mes';
                    } else {
                      return 'Conectado el mes pasado';
                    }
               }else if(segundos > tiempos.mes && segundos <= tiempos.anio){
                return 'Conectado este año';
               }
                
    }

    return value;
}

}
