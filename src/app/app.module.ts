import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';

import { ObtenerEstacionService } from './services/obtener-estacion.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HorariosComponent } from './horarios/horarios.component';
import { ListadoEstacionesComponent } from './listado-estaciones/listado-estaciones.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListadoHorariosComponent } from './listado-horarios/listado-horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    HorariosComponent,
    ListadoEstacionesComponent,
    ListadoHorariosComponent
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
    MatTableModule
  ],
  providers: [ObtenerEstacionService],
  entryComponents: [LoginComponent], // Abrir un componente desde otro
  bootstrap: [AppComponent]
})
export class AppModule { }
