import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomModalService } from 'src/app/custom-modal/custom-modal.service';

@Component({
  selector: 'app-demo-notificaciones',
  templateUrl: './demo-notificaciones.component.html',
  styleUrls: ['./demo-notificaciones.component.scss']
})
export class DemoNotificacionesComponent implements OnInit {
  notificacionForm: FormGroup;
  submitted: false;
// convenience getter for easy access to form fields
  get f() { return this.notificacionForm.controls; }

  constructor(private formBuilder: FormBuilder, private notificaciones: CustomModalService) { }


  ngOnInit() {
    this.notificacionForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      mensaje: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  onSubmit() {
    const tipo = this.f.tipo.value;
    if (tipo === 'ERROR') {
      this.notificaciones.showError(this.f.titulo.value, this.f.mensaje.value);
    } else if (tipo === 'WARNING') {
      this.notificaciones.showWarning(this.f.titulo.value, this.f.mensaje.value);
    } else {
      this.notificaciones.showInformation(this.f.titulo.value, this.f.mensaje.value);
    }


  }
}
