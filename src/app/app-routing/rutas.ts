import { Routes } from '@angular/router';
import { HorariosComponent } from '../horarios/horarios.component';
import { HorariosTablaComponent } from '../horarios-tabla/horarios-tabla.component';

export const rutas: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'horarios-tabla', component: HorariosTablaComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }
];
