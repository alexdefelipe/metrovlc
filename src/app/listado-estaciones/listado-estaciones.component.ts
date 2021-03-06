import { Component, OnInit, Input  } from '@angular/core';

import { Estacion } from '../compartido/estacion';
import { HorariosComponent } from '../horarios/horarios.component';
import { UsuarioService } from '../services/usuario.service';
import { EstacionService } from '../services/estacion.service';


import { Usuario } from "../compartido/usuario"

@Component({
  selector: 'app-listado-estaciones',
  templateUrl: './listado-estaciones.component.html',
  styleUrls: ['./listado-estaciones.component.scss']
})

export class ListadoEstacionesComponent implements OnInit {
  @Input() mostrar_estaciones: boolean;
  @Input() es_origen: boolean;

  estaciones: Estacion[];
  usuario: Usuario = { nombre: '', password: '', est_favoritas: [-1], id: -1 };

  constructor(private horario: HorariosComponent, private usuarioService: UsuarioService, private estacionService: EstacionService) {
    usuario: { nombre: ''; password: ''; est_favoritas: [-1]; id: -1 };
    this.usuarioService.checkLogin().subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
  }

  ngOnInit() {
    usuario: { nombre: ''; password: ''; est_favoritas: [-1]; id: -1 };
    this.usuarioService.checkLogin().subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
    var user = this.usuario;
    this.estacionService.obtenerEstaciones().subscribe(estaciones => {
      this.estaciones = estaciones;
      this.estaciones.forEach(function(estacion, index, array) {
        if (user.est_favoritas.includes(estacion.id)) {
          array[index].fav = true;
        }
      });
      console.log(this.estaciones);
    });
  }

  seleccionar(es_origen, estacion) {
    if (es_origen) {
      this.estacionService.setEstacionOrigen(estacion)
    } else {
      this.estacionService.setEstacionDestino(estacion)
    }
    this.horario.abrirListadoEstaciones(es_origen);
  }

  favorita(estacion) {
    estacion.fav = !estacion.fav;
    if (estacion.fav) {
      this.estacionService.agregarEstacionFavorita(this.usuario.nombre, estacion.id);
    } else {
      this.estacionService.borrarEstacionFavorita(this.usuario.nombre, estacion.id);
    }
  }
}
