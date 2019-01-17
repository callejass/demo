import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomChartBarComponent } from './custom-chart-bar/custom-chart-bar.component';
import { CustomModalHeaderComponent } from './custom-modal-header/custom-modal-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomModalHeaderComponent],
  declarations: [CustomChartBarComponent, CustomModalHeaderComponent]
})
export class SharedModule { }
