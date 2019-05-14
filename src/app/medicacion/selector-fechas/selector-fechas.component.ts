import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selector-fechas',
  templateUrl: './selector-fechas.component.html',
  styleUrls: ['./selector-fechas.component.scss']
})
export class SelectorFechasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  filtroForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get ffiltro() { return this.filtroForm.controls; }

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFiltroSeleccionado = new EventEmitter();

  // private fecha: Date = new Date();
  // public dias: 10;

  ngOnInit() {
    const now = new Date();
    this.filtroForm = this.formBuilder.group({
      fecha: [now, Validators.required],
      dias: [35, Validators.required]
    });
  }

  public onFiltrar() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.filtroForm.invalid) {
      return;
    }
    // alert(this.ffiltro.fecha.value);
    // alert(this.ffiltro.dias.value);
    
    this.onFiltroSeleccionado.emit({
      fecha: this.ffiltro.fecha.value,
      dias: this.ffiltro.dias.value
    });
    // llamamos al alta
  }
}
