import { Injectable, Type } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorModalComponent} from './contenedor-modal/contenedor-modal.component';

// https://malcoded.com/posts/angular-dynamic-components

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  constructor(private modalService: NgbModal) {

  }

  abrircomponente(componente: Type<any>) {

    const m = this.modalService.open(ContenedorModalComponent);
    m.componentInstance.childComponentType = componente;

  }
}
