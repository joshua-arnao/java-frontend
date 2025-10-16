import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

// es una CLASE de typescript
// tiene un decorador Injectable
@Injectable({
  // el alcance de este servicio será para toda la aplicación
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  // vamos a agregar un metodo para traernos los datos
  getMessage(): Observable<string> {
    // return of("Este es un mensaje del backend y se refresca todos los dias v3").pipe(
    //   delay(5000)
    // )
    return this.http.get('http://localhost:3000/messages')
      // pipe - transformacaion
      .pipe(
        // map permite transformar datos
        map((data: any) => {
          // [ { id, mensaje    }   ]
          // quiero obtener solo el mensaje
          // const mensaje = data[0]["id"]["mensaje"]
          const mensaje = data[0]['mensaje']
          return mensaje
        }),
        // agrego un delay para simular una respuesta de backend
        delay(5000)
      )
  }
}
