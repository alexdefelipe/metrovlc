import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { EstacionService } from '../services/estacion.service';
import { Estacion } from '../compartido/estacion';
import { Usuario } from '../compartido/usuario';



@Component({
  selector: 'app-estaciones-favoritas',
  templateUrl: './estaciones-favoritas.component.html',
  styleUrls: ['./estaciones-favoritas.component.scss']
})
export class EstacionesFavoritasComponent implements OnInit {
  estaciones: Estacion[] = [];
  usuario: Usuario = { nombre: '', password: '', est_favoritas: [-1], id: -1 };

  constructor(private usuarioService: UsuarioService, private estacionService: EstacionService) {
    usuario: { nombre: ''; password: ''; est_favoritas: [-1]; id: -1 };
    this.usuarioService.checkLogin().subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario);
    });

    var user = this.usuario;
    var est = this.estaciones;
    this.estacionService.obtenerEstaciones().subscribe(estaciones => {
      estaciones.forEach(function(estacion, index, array) {
        if (user.est_favoritas.includes(estacion.id)) {
          est.push(estacion);
        }
      });
      console.log(this.estaciones);
    });

  }

  ngOnInit() {
  }

  origen(estacion) {
    this.estacionService.setEstacionOrigen(estacion)
  }

  destino(estacion) {
    this.estacionService.setEstacionDestino(estacion)
  }
}
