import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from "../services/usuario.service"
import { EstacionFavoritaService } from '../services/estacion-favorita.service';
import { Usuario } from "../compartido/usuario"



@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  usuario: Usuario;
  constructor(public dialogo: MatDialog, private usuarioService: UsuarioService, private estacionFavoritaService: EstacionFavoritaService) {
    this.usuarioService.checkLogin().subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  ngOnInit() {
  }

  abrirFormularioLogin() {
    this.dialogo.open(LoginComponent, { width: '500px', height: '450px', panelClass: "myapp-no-padding-dialog" });
  }

  cerrarSesion() {
    this.usuarioService.cerrarSesion().subscribe(resultado => {
      this.usuario = resultado;
      console.log(this.usuario)
    });
    event.preventDefault();
  }

  estacionesFavoritas() {
    this.estacionFavoritaService.cambiarVisibilidad();
  }

}
