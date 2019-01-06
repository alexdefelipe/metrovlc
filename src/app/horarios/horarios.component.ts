import { Component, OnInit } from '@angular/core';
import { EstacionFavoritaService } from '../services/estacion-favorita.service';
import { EstacionService } from '../services/estacion.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  // Estas variables serán enviadas a listado-estaciones. Su valor cambia al
  // interactual con el DOM. En el HTML se mandan al otro componente.
  mostrar_estaciones: boolean = false;
  mostrar_horarios: boolean = false;
  mostrar_estaciones_favoritas: boolean = false;
  es_origen: boolean = true;
  estacion_origen: string = "";
  estacion_destino: string = "";
  fecha: string = "";

  constructor(private estacionService: EstacionService, private estacionFavoritaService: EstacionFavoritaService) {
    estacionFavoritaService.obtenerVisibilidad().subscribe(visibilidad => {
      this.mostrar_estaciones_favoritas = visibilidad;
      this.mostrar_horarios = false;
      this.mostrar_estaciones = false;
      console.log("mostrar: " + this.mostrar_estaciones_favoritas);
    })
    estacionService.getEstacionOrigen().subscribe(data => this.estacion_origen = data);
    estacionService.getEstacionDestino().subscribe(data => this.estacion_destino = data);
  }

  ngOnInit() {
    var today = new Date();
    var today2;
    var dd = today.getDate();
    var dd2;
    var mm = today.getMonth() + 1; //January is 0!
    var mm2;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd2 = '0' + dd.toString();
    } else {
      dd2 = dd.toString()
    }
    if (mm < 10) {
      mm2 = '0' + mm.toString()
    } else {
      mm2 = mm.toString();
    }

    today2 = yyyy + '-' + mm2 + '-' + dd2;
    this.fecha = today2;
  }

  abrirListadoEstaciones(es_origen) {
    if (this.mostrar_estaciones_favoritas == true) {
      this.estacionFavoritaService.cambiarVisibilidad();
    }
    this.mostrar_estaciones = true;
    if (this.mostrar_estaciones) {
      this.mostrar_horarios = false;
    }

    this.es_origen = es_origen;
  }

  abrirListadoHorarios() {
    if (this.mostrar_estaciones_favoritas == true) {
      this.estacionFavoritaService.cambiarVisibilidad();
    }
    this.mostrar_horarios = true;
    if (this.mostrar_horarios) {
      this.mostrar_estaciones = false;
    }
  }
}
