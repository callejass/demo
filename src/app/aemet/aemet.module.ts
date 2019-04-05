import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [IndexComponent, MapaComponent]
})
export class AemetModule { }
