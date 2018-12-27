import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Para utilizar HttpClient
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { } // Se pasa un objecto de la clase HttpClient al constructor

  getHorariosParaTrayecto(): Observable<string> {
    return this.http.get<string>("https://metrovlcschedule.herokuapp.com/api/v1/routes?from=121&to=88&date=10/11/2017");
  }
}
