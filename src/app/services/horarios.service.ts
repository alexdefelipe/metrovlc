import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcesaHTTPMsjService } from '../services/procesa-httpmsj.service';

// Para utilizar HttpClient
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient, private procesaHttpMsjService: ProcesaHTTPMsjService) { } // Se pasa un objecto de la clase HttpClient al constructor

  getHorariosParaTrayecto(id_est_origen:string, id_est_dest:string, fecha:string): Observable<string> {
    return this.http.get<string>("https://metrovlcschedule.herokuapp.com/api/v1/routes?from="+id_est_origen+"&to="+id_est_dest+"&date="+fecha)
    .pipe(catchError(this.procesaHttpMsjService.gestionError));;
  }
}
