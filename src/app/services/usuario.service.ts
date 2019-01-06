import { Injectable } from '@angular/core';
import { Observable, empty, of, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// Para utilizar HttpClient
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { baseURL } from '../compartido/baseurl';
import { Usuario } from '../compartido/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({ nombre: "", password: "", est_favoritas: [-1], id: -1 });


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.usuario.next({ nombre: '', password: '', est_favoritas: [-1], id: -1 });
  }

  registrarUsuario(usuario) {
    this.buscarUsuarioEnBD(usuario.nombre).subscribe(usuario_encontrado => {
      if (usuario_encontrado.length == 0) {
        this.http.post(baseURL + 'usuarios', usuario, this.httpOptions).subscribe(resultado => console.log("Usuario registrado"));
      } else {
        console.error("Ya existe un usuario con ese nombre");
      }
    });
  }

  login(usuario_logando, dialogRef): boolean {
    this.buscarUsuarioEnBD(usuario_logando.nombre).subscribe(usuario_encontrado => {
      if (usuario_encontrado.length == 1) {
        var user = usuario_encontrado[0];
        if (user.password === usuario_logando.password) {
          var usuario_a_guardar = {
            nombre: user.nombre,
            password: user.password,
            est_favoritas: user.est_favoritas,
            id: user.id
          };
          if (usuario_logando.nocerrar) {
            localStorage.setItem("usuario", JSON.stringify(usuario_a_guardar));

          } else {
            sessionStorage.setItem("usuario", JSON.stringify(usuario_a_guardar));
          }
          this.usuario.next(usuario_a_guardar);
          dialogRef.close();
          return true;
        } else {
          console.error("La contraseña es incorrecta");
          return false;
        }
      } else {
        console.error("El nombre de usuario no existe");
        return false;
      }
    });
    return false;
  }

  checkLogin(): Observable<any> {
    let usu: Usuario = JSON.parse(localStorage.getItem("usuario"))
    if (usu) {
      this.usuario.next(usu);
    }
    return this.usuario.asObservable();
  }

  buscarUsuarioEnBD(nombre): Observable<any> {
    return this.http.get<any>(baseURL + 'usuarios?nombre=' + nombre);
  }

  cerrarSesion(): Observable<any> {
    this.usuario.next({ nombre: "", password: "", est_favoritas: [-1], id: -1 });
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("usuario");
    return this.usuario.asObservable();
  }
}
