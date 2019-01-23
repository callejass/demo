import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorModalComponent} from './contenedor-modal/contenedor-modal.component';
import { CustomModalConfig } from './custom-modal.config';

// https://malcoded.com/posts/angular-dynamic-components

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  private modalReference: NgbModalRef;

  constructor(private modalService: NgbModal) {

  }

/**
 * Abre un componente en popup, incluyendo una cabecera y un pié por defecto
 * @param componente Tipo de componente que se va a abrir
 */


  abrirComponente(componente: Type<any>, config: CustomModalConfig) {
    this.crearModal(componente, config);

  }

  private crearModal(componente: Type<any>, config: CustomModalConfig) {
    this.modalReference = this.modalService.open(ContenedorModalComponent);
    this.modalReference.componentInstance.childComponentType = componente;

  }




}
