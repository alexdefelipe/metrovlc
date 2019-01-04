import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UsuarioService } from "../services/usuario.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario = { nombre: '', password: '', nocerrar: false };

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private usuarioService: UsuarioService) {
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
