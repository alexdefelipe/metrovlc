import { Component, OnInit, Input } from '@angular/core';
import { Estacion } from '../compartido/estacion';
import { ObtenerEstacionService } from '../services/obtener-estacion.service';
import { HorariosComponent } from '../horarios/horarios.component';
@Component({
  selector: 'app-listado-estaciones',
  templateUrl: './listado-estaciones.component.html',
  styleUrls: ['./listado-estaciones.component.scss']
})

export class ListadoEstacionesComponent implements OnInit {
  @Input() mostrar_estaciones: boolean;
  @Input() es_origen: boolean;

  vEstaciones: Estacion[] = [
    {
      id: 1,
      nombre: "Machado",
      direccion: "C/ Emilio Baró",
      lineas: [3, 9]
    },
    {
      id: 2,
      nombre: "Benimaclet",
      direccion: "C/ Dr. Vte Zaragozá",
      lineas: [3, 4, 6, 9]
    },
    {
      id: 3,
      nombre: "Alameda",
      direccion: "Paseo de la ciudadela",
      lineas: [3, 5, 7, 9]
    },
    {
      id: 4,
      nombre: "Colón",
      direccion: "C/ Colón",
      lineas: [3, 5, 7, 9]
    }
  ];
  seleccionar(es_origen, estacion) {
    if (es_origen) {
      this.obtenerEstacion.estacion_origen = estacion;
      this.obtenerEstacion.resuelto = true;
    } else {
      this.obtenerEstacion.estacion_destino = estacion;
      this.obtenerEstacion.resuelto = true;
    }
    this.horario.abrirListadoEstaciones(es_origen);
  }

  constructor(private obtenerEstacion: ObtenerEstacionService, private horario: HorariosComponent) { }

  ngOnInit() {
  }

}
