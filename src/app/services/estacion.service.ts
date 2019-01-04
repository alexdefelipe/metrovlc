import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ListadoEstacionesComponent } from '../listado-estaciones/listado-estaciones.component';

import { Estacion } from '../compartido/estacion';
import { baseURL } from '../compartido/baseurl';

// Para utilizar HttpClient
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {

  private estacion_origen = new Subject<any>();
  private estacion_destino = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  obtenerEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(baseURL + "estaciones");
  }

  setEstacionOrigen(estacion: string) {
    this.estacion_origen.next(estacion)
  }

  getEstacionOrigen(): Observable<any> {
    return this.estacion_origen.asObservable();
  }

  setEstacionDestino(estacion) {
    this.estacion_destino.next(estacion);
  }

  getEstacionDestino(): Observable<any> {
    return this.estacion_destino.asObservable();
  }

  getIdEstacion(nombre_estacion: string): Observable<string> {
    return this.http.get<string>("https://metrovlcschedule.herokuapp.com/api/v1/stations/converter/" + nombre_estacion)
  }

}
