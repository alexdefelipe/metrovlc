import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consulta } from '../compartido/consulta';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  consultaForm: FormGroup;
  consulta: Consulta;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    this.consultaForm = this.fb.group({
      nombre: "",
      correo: "",
      mensaje: ""
    });
  }

  onSubmit() {
    this.consulta = this.consultaForm.value;
    console.log(this.consulta);
    this.consultaForm.reset();
  }

}
