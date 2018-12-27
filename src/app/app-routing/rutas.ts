import { Routes } from '@angular/router';
import { HorariosComponent } from '../horarios/horarios.component';
import { ListadoEstacionesComponent } from '../listado-estaciones/listado-estaciones.component';

export const rutas: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'listado-estaciones', component: ListadoEstacionesComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }
];
