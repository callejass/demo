import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomModalService } from 'src/app/custom-modal/custom-modal.service';

@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.scss']
})
export class MedicinasComponent implements OnInit {

  public medicinas: Array<any>;
  altaForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get falta() { return this.altaForm.controls; }

  constructor(public dataService: DataService, private formBuilder: FormBuilder, private alertas: CustomModalService ) {

  }

  ngOnInit() {
    this.altaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });



    this.dataService.GetMedicinas().subscribe(medicinas => {
      this.medicinas = medicinas;
    });
  }


  onDeleteMedicina(id: string) {
    alert(id);
    this.dataService.BorrarMedicina(id);
  }

  onSubmitNuevaMedicina() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.altaForm.invalid) {
        return;
    }
    // llamamos al alta
    this.dataService.CrearMedicina(this.falta.titulo.value, this.falta.descripcion.value, null).then(
      docref => {
        // tslint:disable-next-line:max-line-length
        // this.alertas.showInformation('Galería creada correctamente', `Se ha creado correctamente la galería con id ${docref.id}`);
      }
    ).catch(error => {
      this.alertas.showError('Error al crear la medicina', JSON.stringify(error));
    });

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}


}
