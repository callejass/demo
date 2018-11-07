import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IndexMapaComponent } from './index-mapa/index-mapa.component';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule
  ],
  declarations: [IndexMapaComponent],
  exports: [IndexMapaComponent]
})
export class DemoMapaModule { }
