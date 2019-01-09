import { Routes } from '@angular/router';
import { HorariosComponent } from '../horarios/horarios.component';
import { ListadoEstacionesComponent } from '../listado-estaciones/listado-estaciones.component';
import { RegisterComponent } from '../register/register.component';
import { MiCuentaComponent } from '../mi-cuenta/mi-cuenta.component';
import { ContactoComponent } from '../contacto/contacto.component';

export const rutas: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'listado-estaciones', component: ListadoEstacionesComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }
];
