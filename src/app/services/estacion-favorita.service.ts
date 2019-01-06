import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estacion } from '../compartido/estacion';
import { Usuario } from '../compartido/usuario';
import { UsuarioService } from "../services/usuario.service"
import { baseURL } from '../compartido/baseurl';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { EstacionService } from '../services/estacion.service';

@Injectable({
  providedIn: 'root'
})
export class EstacionFavoritaService {
  visible = false
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private usuarioService: UsuarioService, private http: HttpClient, private estacionService: EstacionService) { }

  cambiarVisibilidad(): Observable<any> {
    return of(this.visible)
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
