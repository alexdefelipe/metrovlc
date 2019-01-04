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
  // usuario = { nombre: '', password: '', nocerrar: false };
  private usuario = new BehaviorSubject<Usuario>({nombre:"", password:"", est_favoritas:[-1]});


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.usuario.next({ nombre: '', password: '', est_favoritas:[-1]});
  }

  registrarUsuario(usuario) {
    this.buscarUsuario(usuario.nombre).subscribe(usuario_encontrado => {
      if (usuario_encontrado.length == 0) {
        this.http.post(baseURL + 'usuarios', usuario, this.httpOptions).subscribe(resultado => console.log("Usuario registrado"));
      } else {
        console.error("Ya existe un usuario con ese nombre");
      }
    });
  }

  login(usuario_logando, dialogRef): boolean {
    this.buscarUsuario(usuario_logando.nombre).subscribe(usuario_encontrado => {
      if (usuario_encontrado.length == 1) {
        if (usuario_encontrado[0].password === usuario_logando.password) {
          if (usuario_logando.nocerrar) {
            localStorage.setItem("usuario", JSON.stringify(usuario_logando));

          } else {
            sessionStorage.setItem("usuario", JSON.stringify(usuario_logando));
          }
          this.usuario.next({ nombre: usuario_logando.nombre, password: usuario_logando.password,est_favoritas: usuario_logando.est_favoritas });
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
    // return this.usuario.asObservable();
    let usu = JSON.parse(localStorage.getItem("usuario"))
    if (usu) {
      this.usuario = usu;
    }
    return this.usuario.asObservable();
  }

  buscarUsuario(nombre): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseURL + 'usuarios?nombre=' + nombre);
  }

  cerrarSesion(): Observable<any> {
    this.usuario.next({nombre:"", password:"", est_favoritas:[-1]});
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("usuario");
    return this.usuario.asObservable();
  }
}
