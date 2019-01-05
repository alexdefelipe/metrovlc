import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// Para utilizar HttpClient
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../compartido/usuario';
import { baseURL } from '../compartido/baseurl';

import { UsuarioService } from "../services/usuario.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  usuario = {nombre:"", password:"", no_cerrar:false, est_favoritas:[-1]};
  // usuariorest = {nombre:"", password:""};
  rep_pass: string;

  hide = true;
  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  registrarUsuario() {
    console.log(this.usuario);
    if (this.usuario["password"] === this.rep_pass) {
      console.log("Las contraseñas coinciden");
      this.usuarioService.registrarUsuario(this.usuario);
    } else {
      console.log("no coinciden")
    }
  }

}
