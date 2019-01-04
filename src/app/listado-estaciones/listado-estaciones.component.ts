import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';

import { Estacion } from '../compartido/estacion';
import { HorariosComponent } from '../horarios/horarios.component';
import { UsuarioService } from '../services/usuario.service';
import { EstacionFavoritaService } from '../services/estacion-favorita.service';
import { EstacionService } from '../services/estacion.service';

@Component({
  selector: 'app-listado-estaciones',
  templateUrl: './listado-estaciones.component.html',
  styleUrls: ['./listado-estaciones.component.scss']
})

export class ListadoEstacionesComponent implements OnInit {
  @Input() mostrar_estaciones: boolean;
  @Input() es_origen: boolean;

  estaciones: Estacion[];
  subscription: Subscription;
  usuario = { nombre: '', password: '' };

  constructor(private horario: HorariosComponent, private usuarioService: UsuarioService,
    private estacionFavoritaService: EstacionFavoritaService, private estacionService: EstacionService) {
    this.subscription = this.usuarioService.checkLogin().subscribe(usuario => {
      this.usuario = usuario;
      console.log(this.usuario);
    });
  }

  ngOnInit() {
    this.estacionService.obtenerEstaciones().subscribe(estaciones => {
      this.estaciones = estaciones;
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

    }
  }

}
