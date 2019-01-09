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

  erroresForm = {
    'nombre': '',
    'email': ''
    'mensaje': '',
  };

  mensajesError = {
    'nombre': {
      'required': 'El nombre es obligatorio.',
    },
    'email': {
      'required': 'La dirección de email es obligatoria.',
      'email': 'La dirección de email no tiene el formato correcto.'
    },
    'apellidos': {
      'required': 'Los apellidos son obligatorios.',
    }
  };

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    this.consultaForm = this.fb.group({
      nombre: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      mensaje: ""
    });
    this.consultaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }

  onSubmit() {
    this.consulta = this.consultaForm.value;
    console.log(this.consulta);
    this.consultaForm.reset();
  }

  onCambioValor(data?: any) {
    if (!this.consultaForm) { return; }
    const form = this.consultaForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesError[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

}
