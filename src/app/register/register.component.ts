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
  usuario = {nombre:"", password:"", est_favoritas:[]};
  usuariorest = {nombre:"", password:""};
  rep_pass: string;

  hide = true;
  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  registrarUsuario() {
    console.log(this.usuario["nombre"])
    console.log(this.usuario["password"])
    console.log(this.rep_pass)
    if (this.usuario["password"] === this.rep_pass) {
      console.log("Las contraseñas coinciden")
      this.usuariorest = this.usuario;
      this.usuarioService.registrarUsuario(this.usuariorest);
    } else {
      console.log("no coinciden")
    }
  }

}
