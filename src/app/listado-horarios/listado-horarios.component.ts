import { Component, OnInit, Input } from '@angular/core';
import { HorariosService } from '../services/horarios.service';
import { EstacionService } from '../services/estacion.service';

@Component({
  selector: 'app-listado-horarios',
  templateUrl: './listado-horarios.component.html',
  styleUrls: ['./listado-horarios.component.scss']
})
export class ListadoHorariosComponent implements OnInit {
  @Input() mostrar_horarios: boolean;
  @Input() estacion_origen: string;
  @Input() estacion_destino: string;
  @Input() fecha: string;
  tabla_horarios = [];
  tabla = [];
  cosa = [];
  cosa_grande = [];
  terminado: boolean = false;

  displayedColumns: string[] = ["col1", "col2", "col3", "col4", "col5", "col6", "col7", "col8"];
  constructor(private estacionService: EstacionService, private horarios: HorariosService) { }

  ngOnInit() { this.obtenerHorariosTrayecto() }

  obtenerHorariosTrayecto() {
    var id_est_origen;
    var id_est_dest;
    this.estacionService.getIdEstacion(this.estacion_origen).subscribe(resultado => {
      id_est_origen = resultado["station_code"];
      this.estacionService.getIdEstacion(this.estacion_destino).subscribe(resultado => {
        id_est_dest = resultado["station_code"];
        this.horarios.getHorariosParaTrayecto(id_est_origen, id_est_dest, this.convertirFecha(this.fecha)).subscribe(resultado => this.parsearResultado(resultado));
      });
    });
  }

  convertirFecha(fecha) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(fecha);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

  parsearResultado(resultado) {
    var tabla_viaje = [];
    tabla_viaje[0] = [];
    var i = 0;
    var j = 0;
    var hora;
    var hora_ant;

    this.tabla_horarios = resultado.journey;

    for (var viaje of this.tabla_horarios) {
      for (var tiempo of viaje.journeyHours) {
        if (i == 0 && j == 0) {
          tabla_viaje[i].push(tiempo);
          j++;
        } else {
          hora = tiempo.split(":")[0];
          if (hora == hora_ant) {
            tabla_viaje[i][j] = tiempo;
            j++;
            if (j >= 8) {
              tabla_viaje.push([]);
              i++;
              j = 0;
              tabla_viaje[i][j] = tiempo;
            }
          } else {
            j = 0;
            var aux = tabla_viaje[i].length
            if (aux <= 8) {
              for (var k = 0; k < (8 - aux); k++) {
                tabla_viaje[i].push("--")
              }
            }
            tabla_viaje.push([]);
            i++;
            tabla_viaje[i][j] = tiempo;
            j++;
          }
        }
        hora_ant = hora;
      }
      aux = tabla_viaje[tabla_viaje.length - 1].length;
      for (var k = 0; k < (8 - aux); k++) {
        tabla_viaje[tabla_viaje.length - 1].push("--");
      }
      this.tabla.push(tabla_viaje);
      i = 0;
      j = 0;
      tabla_viaje = [];
      tabla_viaje[0] = [];
    }
    console.log(this.tabla);

    for (var t of this.tabla) {
      for (var k = 0; k < t.length; k++) {
        this.cosa[k] = {}

        this.cosa[k]["col" + (1)] = t[k][0];
        this.cosa[k]["col" + (2)] = t[k][1];
        this.cosa[k]["col" + (3)] = t[k][2];
        this.cosa[k]["col" + (4)] = t[k][3];
        this.cosa[k]["col" + (5)] = t[k][4];
        this.cosa[k]["col" + (6)] = t[k][5];
        this.cosa[k]["col" + (7)] = t[k][6];
        this.cosa[k]["col" + (8)] = t[k][7];
      }
      this.cosa_grande.push(this.cosa);
      this.cosa = []
    }
    console.log(this.cosa_grande);
    this.terminado = true;
  }
}
