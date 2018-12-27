import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerEstacionService {
  estacion_origen: string;
  estacion_destino: string;
  resuelto: boolean = false;

  constructor() { }

  getEstacionOrigen(): Promise<string> {
    if (this.resuelto) {
      return Promise.resolve(this.estacion_origen);
      this.resuelto = false;
    }
  }

  getEstacionDestino(): Promise<string> {
      if (this.resuelto) {
        return Promise.resolve(this.estacion_destino);
        this.resuelto = false;
      }
  }
}
