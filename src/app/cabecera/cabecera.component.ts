import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(public dialogo: MatDialog) { }

  ngOnInit() {
  }

  abrirFormularioLogin() {
    this.dialogo.open(LoginComponent, {width: '500px', height: '450px',panelClass: "myapp-no-padding-dialog"});

  }

}
