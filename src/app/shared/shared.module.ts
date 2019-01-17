import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomChartBarComponent } from './custom-chart-bar/custom-chart-bar.component';
import { CustomModalHeaderComponent } from './custom-modal-header/custom-modal-header.component';
import { CustomModalFooterComponent } from './custom-modal-footer/custom-modal-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomModalHeaderComponent, CustomModalFooterComponent],
  declarations: [CustomChartBarComponent, CustomModalHeaderComponent, CustomModalFooterComponent]
})
export class SharedModule { }
