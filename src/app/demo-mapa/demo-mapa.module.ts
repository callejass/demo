import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexMapaComponent } from './index-mapa/index-mapa.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexMapaComponent],
  exports: [IndexMapaComponent]
})
export class DemoMapaModule { }
