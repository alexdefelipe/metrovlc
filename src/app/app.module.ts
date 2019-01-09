import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Mis componentes
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { ListadoHorariosComponent } from './listado-horarios/listado-horarios.component';
import { RegisterComponent } from './register/register.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ListadoEstacionesComponent } from './listado-estaciones/listado-estaciones.component';
import { EstacionesFavoritasComponent } from './estaciones-favoritas/estaciones-favoritas.component';
import { ContactoComponent } from './contacto/contacto.component';

// Mis servicios
import { UsuarioService } from './services/usuario.service';
import { EstacionService } from './services/estacion.service';
import { EstacionFavoritaService } from './services/estacion-favorita.service';
import { ProcesaHTTPMsjService } from './services/procesa-httpmsj.service';
import { baseURL } from './compartido/baseurl';

// Material design
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    HorariosComponent,
    ListadoEstacionesComponent,
    ListadoHorariosComponent,
    RegisterComponent,
    MiCuentaComponent,
    EstacionesFavoritasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    AppRoutingModule,
    MatListModule, MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [{provide: 'BaseURL', useValue: baseURL}, EstacionFavoritaService, UsuarioService, EstacionService, ProcesaHTTPMsjService],
  entryComponents: [LoginComponent], // Abrir un componente desde otro
  bootstrap: [AppComponent]
})
export class AppModule { }
