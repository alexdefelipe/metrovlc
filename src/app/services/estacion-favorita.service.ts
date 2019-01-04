import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estacion } from '../compartido/estacion';
import { UsuarioService } from "../services/usuario.service"
import { baseURL } from '../compartido/baseurl';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  constructor(private usuarioService: UsuarioService, private http: HttpClient) { }

  cambiarVisibilidad(): Observable<any>  {
    return of(this.visible)
  }

  agregarEstacionFavorita(estacion: Estacion) {
    // this.usuarioService.buscarUsuario(usuario.nombre).subscribe(usuario_encontrado => {
    //   this.http.get(baseURL + 'usuarios', usuario, this.httpOptions).subscribe( resultado => {
    //     resultado = resultado[0];
    //     resultado.est_favoritas.push(estacion);
    //     this.http.put(baseURL + 'usuarios/' + resultado.id,resultado, this.httpOptions).subscribe();
    //   });
    // });
    this.usuarioService.checkLogin().subscribe(usuario => {
      usuario.est_favoritas.push(estacion.id);
    });
  }

  borrarEstacionFavorita(estacion: Estacion) {
    // this.usuarioService.checkLogin().subscribe(usuario => {
    //   var id_borrar = usuario.est_favoritas.find(id => id == estacion.id);
    //   console.log(id_borrar);
    //   var index_id = usuario.est_favoritas.indexOf(id_borrar);
    //   usuario.est_favoritas.splice(index_id,1);
    //   console.log(est_favoritas);
    // });
  }
}
