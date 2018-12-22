import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { rutas } from './rutas';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
