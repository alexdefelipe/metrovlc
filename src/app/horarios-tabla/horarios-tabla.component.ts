import { Component, OnInit, Input } from '@angular/core';
import { Estacion } from '../compartido/estacion';

@Component({
  selector: 'app-horarios-tabla',
  templateUrl: './horarios-tabla.component.html',
  styleUrls: ['./horarios-tabla.component.scss']
})

export class HorariosTablaComponent implements OnInit {
  @Input() showMePartially: boolean;
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

  constructor() { }

  ngOnInit() {
  }

}
