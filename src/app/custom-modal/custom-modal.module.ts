import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorModalComponent } from './contenedor-modal/contenedor-modal.component';
import { AdDirective } from './ad.directive';
import { CustomModalInjector } from './custom-modal.injector';
import { CustomModalConfig } from './custom-modal.config';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [ContenedorModalComponent],
  declarations: [ContenedorModalComponent, AdDirective]
})
export class CustomModalModule { }
