import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EJAngular2Module } from 'ej-angular2';
import { MenuModule, TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IndexComponent } from './index/index.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

import { CognitiveRoutingModule } from './cognitive-routing.module';
import { ImageInformationComponent } from './image-information/image-information.component';
import { RangeNavigatorAllModule, AccumulationChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { ListadoUrlsComponent } from './listado-urls/listado-urls.component';
import { SharedModule} from '../shared/shared.module';
import {CustomModalModule} from '../custom-modal/custom-modal.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    TabModule,
    TabAllModule,
    NgbModule,
    RouterModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    CognitiveRoutingModule,
    SharedModule,
    CustomModalModule,
    FontAwesomeModule
  ],
  entryComponents: [ListadoUrlsComponent, ImageLoaderComponent],
  declarations: [IndexComponent, ImageLoaderComponent, ImagenComponent, ImagenesComponent, ImageInformationComponent, ListadoUrlsComponent]
})
export class CognitiveModule { }
