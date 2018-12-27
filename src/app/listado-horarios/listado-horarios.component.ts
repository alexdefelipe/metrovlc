import { Component, OnInit, Input } from '@angular/core';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-listado-horarios',
  templateUrl: './listado-horarios.component.html',
  styleUrls: ['./listado-horarios.component.scss']
})
export class ListadoHorariosComponent implements OnInit {
  @Input() mostrar_horarios: boolean;
  tabla_horarios = [];
  tabla = [];

  displayedColumns = ["Hora de salida"];
  constructor(private horarios: HorariosService) { }

  ngOnInit() { this.obtenerHorariosTrayecto() }

  obtenerHorariosTrayecto() {
    this.horarios.getHorariosParaTrayecto().subscribe(resultado => this.parsearResultado(resultado));
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
            if (aux < 8) {
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
      this.tabla.push(tabla_viaje);
      i = 0;
      j = 0;
      tabla_viaje = [];
      tabla_viaje[0] = [];
    }
    console.log(this.tabla);
  }
}
