import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoColorPickerComponent } from './demo-color-picker/demo-color-picker.component';
import { DemoSliderComponent } from './demo-slider/demo-slider.component';
import { IndexDemoControlesSyncfusionComponent } from './index-demo-controles-syncfusion/index-demo-controles-syncfusion.component';
import { DemoReportingComponent } from './demo-reporting/demo-reporting.component';
import { DemoLinearGaugeComponent } from './demo-linear-gauge/demo-linear-gauge.component';
import { DemoChartComponent } from './demo-chart/demo-chart.component';

const secondaryRoutes: Routes = [
  {
    path: 'demosyncfusion', component: IndexDemoControlesSyncfusionComponent, children: [
      {path: '', redirectTo: '/demosyncfusion/colorpicker', pathMatch: 'full'},
      { path: 'colorpicker',  component: DemoColorPickerComponent},
      { path: 'slider', component: DemoSliderComponent},
      { path: 'lineargauge', component: DemoLinearGaugeComponent},
      { path: 'chart', component: DemoChartComponent},
      { path: 'reporting', component: DemoReportingComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoControlerRoutingModule {

}
