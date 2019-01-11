import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EJAngular2Module } from 'ej-angular2';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

import { DemoControlerRoutingModule } from './demo-controles-routing.module';
import { IndexDemoControlesSyncfusionComponent } from './index-demo-controles-syncfusion/index-demo-controles-syncfusion.component';
import { DemoColorPickerComponent } from './demo-color-picker/demo-color-picker.component';
import { DemoSliderComponent } from './demo-slider/demo-slider.component';

import { DemoReportingComponent } from './demo-reporting/demo-reporting.component';
import { DemoLinearGaugeComponent } from './demo-linear-gauge/demo-linear-gauge.component';
import { DemoChartComponent } from './demo-chart/demo-chart.component';
@NgModule({
  imports: [
    CommonModule,
    DemoControlerRoutingModule,
    MenuModule,
    SliderModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule
    //EJAngular2Module.forRoot()
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [IndexDemoControlesSyncfusionComponent, DemoColorPickerComponent, DemoSliderComponent, DemoReportingComponent, DemoLinearGaugeComponent, DemoChartComponent]
})
export class DemoControlesSyncfusionModule { }
