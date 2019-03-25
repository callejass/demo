import { Component, OnInit } from '@angular/core';
import { ConexionFirebaseService } from '../conexion-firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomModalService } from 'src/app/custom-modal/custom-modal.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  altaForm: FormGroup;
  submitted = false;

  constructor(private fbServicio: ConexionFirebaseService, private formBuilder: FormBuilder, private alertas: CustomModalService ) {

   }

  galerias: Array<any>;
  galerias2: Array<any>;

  ngOnInit() {
    // construimos el formulario de alta

    this.altaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });


    // this.fbServicio.getGalerias().then(resultado => {
    //   this.galerias = resultado;
    // });

    this.fbServicio.getGaleriasAutomaticPull().subscribe(resultado => {
      this.galerias2 = resultado;
    });
  }


  // convenience getter for easy access to form fields
  get falta() { return this.altaForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.altaForm.invalid) {
          return;
      }
      debugger;
      // llamamos al alta
      this.fbServicio.crearGaleria(this.falta.titulo.value, this.falta.descripcion.value).then(
        docref => {
          // tslint:disable-next-line:max-line-length
          this.alertas.showInformation('Galería creada correctamente', `Se ha creado correctamente la galería con id ${docref.id}`);
        }
      ).catch(error => {
        this.alertas.showError('Error al crear la galería', JSON.stringify(error));
      });

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }


}
