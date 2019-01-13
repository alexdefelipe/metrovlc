import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { ListadoEstacionesComponent } from '../listado-estaciones/listado-estaciones.component';

import { Estacion } from '../compartido/estacion';
import { Usuario } from '../compartido/usuario';
import { baseURL } from '../compartido/baseurl';
import { UsuarioService } from "../services/usuario.service"

// Para utilizar HttpClient
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  visibleEstacionesFavoritas = new BehaviorSubject(false);
  private estacion_origen = new Subject<any>();
  private estacion_destino = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private usuarioService: UsuarioService, private http: HttpClient) { }

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

  cambiarVisibilidadEstacionesFavoritas() {
    this.visibleEstacionesFavoritas.next(!this.visibleEstacionesFavoritas.getValue());
    console.log(this.visibleEstacionesFavoritas.getValue());
  }

  obtenerVisibilidadEstacionesFavoritas(): Observable<any> {
    return this.visibleEstacionesFavoritas.asObservable();
  }

  agregarEstacionFavorita(n_usuario: string, n_estacion: number) {
    this.usuarioService.buscarUsuarioEnBD(n_usuario).subscribe(usuario_encontrado => {
      var usuario = usuario_encontrado[0];
      usuario.est_favoritas.push(n_estacion);
      this.http.put(baseURL + 'usuarios/' + usuario.id, usuario, this.httpOptions).subscribe();
      localStorage.setItem("usuario", JSON.stringify(usuario));
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
    });
  }

  borrarEstacionFavorita(n_usuario: string, n_estacion: number) {
    this.usuarioService.buscarUsuarioEnBD(n_usuario).subscribe(usuario_encontrado => {
      var usuario = usuario_encontrado[0];
      var id_borrar = usuario.est_favoritas.find(id => id == n_estacion);
      var index_id = usuario.est_favoritas.indexOf(id_borrar);
      usuario.est_favoritas.splice(index_id, 1);
      this.http.put(baseURL + 'usuarios/' + usuario.id, usuario, this.httpOptions).subscribe();
      localStorage.setItem("usuario", JSON.stringify(usuario));
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
    });
  }
}
