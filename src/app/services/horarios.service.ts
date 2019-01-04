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

  getHorariosParaTrayecto(id_est_origen:string, id_est_dest:string, fecha:string): Observable<string> {
    return this.http.get<string>("https://metrovlcschedule.herokuapp.com/api/v1/routes?from="+id_est_origen+"&to="+id_est_dest+"&date="+fecha);
  }
}
