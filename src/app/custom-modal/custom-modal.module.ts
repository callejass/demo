import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorModalComponent } from './contenedor-modal/contenedor-modal.component';
import { AdDirective } from './ad.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [ContenedorModalComponent],
  declarations: [ContenedorModalComponent, AdDirective]
})
export class CustomModalModule { }
