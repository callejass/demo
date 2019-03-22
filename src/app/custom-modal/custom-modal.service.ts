import { Injectable, Type, Injector } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModule, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ContenedorModalComponent} from './contenedor-modal/contenedor-modal.component';
import { CustomModalConfig } from './custom-modal.config';
import { CustomModalInjector } from './custom-modal.injector';
import { CustomModalRef } from './custom-modal-ref';
import { NotificacionComponent } from './notificacion/notificacion.component';

// https://malcoded.com/posts/angular-dynamic-components

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {

  private modalReference: NgbModalRef;

  constructor(private modalService: NgbModal, private injector: Injector) {

  }

/**
 * Abre un componente en popup, incluyendo una cabecera y un pié por defecto
 * @param componente Tipo de componente que se va a abrir
 */


  abrirComponente(componente: Type<any>, config: CustomModalConfig, controlarCancel: boolean = false) {

    return this.crearModal(componente, config, controlarCancel);

  }

  showInformation(titulo: string, mensaje: string) {
    console.log(`${titulo} - ${mensaje}`);
    this.showNotificacion(titulo, mensaje, 'info');
  }

  showWarning(titulo: string, mensaje: string) {
    console.log(`${titulo} - ${mensaje}`);
    this.showNotificacion(titulo, mensaje, 'exclamation');
  }

  showError(titulo: string, mensaje: string) {
    console.error(`${titulo} - ${mensaje}`);
    this.showNotificacion(titulo, mensaje, 'times');
  }


  private showNotificacion(titulo: string, mensaje: string, icono: string) {
    
    const config = {
      size: 'md',
      title: titulo,
      inputdata: {
        mensaje: mensaje,
        icono: icono
      }
    };
    const referencia = this.crearModal(NotificacionComponent, config, true).result;
    referencia.then(result => {
      console.log('then notificación');
    });
    referencia.catch(result => {
      console.log('catch notificacion');
    });

    // referencia.dismiss(result => {
    //   console.log('dismiss notificación');
    // });

  }


  private crearModal(componente: Type<any>, config: CustomModalConfig, controlarCancel: boolean) {

    const map = new WeakMap();
    map.set(CustomModalConfig, config);

    const dialogRef = new CustomModalRef();
    map.set(CustomModalRef, dialogRef);
    // let opciones = new NgbModalConfig();

    const opciones = {
      // size: config.size,
      backdrop: true,
      centered: true,
      injector: new CustomModalInjector(this.injector, map)
    };
    // abrimos la modal
    this.modalReference = this.modalService.open(ContenedorModalComponent, opciones);
    // Establecemos el título
    this.modalReference.componentInstance.titulo = config.title;
    // Establecemos el componente hijo a cargar
    this.modalReference.componentInstance.childComponentType = componente;


    const sub = dialogRef.afterClosed.subscribe((outputdata) => {
      console.log(outputdata);
      if (outputdata.tipo === 'ACCEPT') {
        this.modalReference.close(outputdata.result);
      } else if (controlarCancel) {
        this.modalReference.dismiss(outputdata.result);
      }

    });


    return this.modalReference;

  }




}
