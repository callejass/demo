import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IndexMapaComponent } from './index-mapa/index-mapa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    // LeafletModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [IndexMapaComponent],
  exports: [IndexMapaComponent]
})
export class DemoMapaModule { }
