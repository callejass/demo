import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EJAngular2Module } from 'ej-angular2';
import { MenuModule, TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IndexComponent } from './index/index.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { RouterModule } from '@angular/router';
import { ImagenesRoutingModule } from './imagenes-routing.module';
import { ImageInformationComponent } from './image-information/image-information.component';
import { RangeNavigatorAllModule, AccumulationChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    TabModule,
    TabAllModule,
    NgbModule,
    RouterModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    ImagenesRoutingModule
  ],
  declarations: [IndexComponent, ImageLoaderComponent, ImagenComponent, ImagenesComponent, ImageInformationComponent]
})
export class ImagenesModule { }
