import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorModalComponent } from './contenedor-modal/contenedor-modal.component';
import { AdDirective } from './ad.directive';
import { CustomModalInjector } from './custom-modal.injector';
import { CustomModalConfig } from './custom-modal.config';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  entryComponents: [ContenedorModalComponent, NotificacionComponent],
  declarations: [ContenedorModalComponent, AdDirective, NotificacionComponent]
})
export class CustomModalModule { }
