import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsuarioService } from "../services/usuario.service"
import { Usuario } from '../compartido/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private usuarioService: UsuarioService) {
    this.usuarioService.checkLogin().subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
  }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

  iniciarSesion() {
    this.usuarioService.login(this.usuario, this.dialogRef);

  }
}
