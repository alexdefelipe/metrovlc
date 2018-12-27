import { Component, OnInit } from '@angular/core';
import { ObtenerEstacionService } from '../services/obtener-estacion.service';

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
  es_origen: boolean = true;
  estacion_origen: string = "";
  estacion_destino: string = "";
  constructor(private estacionService: ObtenerEstacionService) { }

  ngOnInit() {
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1; //January is 0!
    // var yyyy = today.getFullYear();
    // if (dd < 10) {
    //   dd = '0' + dd.toString();
    // }
    // if (mm < 10) {
    //   mm = '0' + mm
    // }
    //
    // today = yyyy + '-' + mm + '-' + dd;
    // document.getElementById("date").setAttribute("value", today);
    // document.getElementById("date").setAttribute("min", today);
  }

  abrirListadoEstaciones(es_origen) {
    this.mostrar_estaciones = true;
    if (this.mostrar_estaciones) {
      this.mostrar_horarios = false;
    }

    this.es_origen = es_origen;
    if (es_origen) {
      if (this.estacionService.resuelto) {
        this.estacionService.getEstacionOrigen().then(estacion => this.estacion_origen = estacion);
      }
    } else {
      if (this.estacionService.resuelto) {
        this.estacionService.getEstacionDestino().then(estacion => this.estacion_destino = estacion);
      }
    }
  }

  abrirListadoHorarios() {
    this.mostrar_horarios = true;
    if (this.mostrar_horarios) {
      this.mostrar_estaciones = false;
    }
  }
}
