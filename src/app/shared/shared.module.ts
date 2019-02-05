import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomChartBarComponent } from './custom-chart-bar/custom-chart-bar.component';
import { CustomModalHeaderComponent } from './custom-modal-header/custom-modal-header.component';
import { CustomModalFooterComponent } from './custom-modal-footer/custom-modal-footer.component';
import { PanelComponent } from './panel/panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [CustomModalHeaderComponent, CustomModalFooterComponent, PanelComponent],
  declarations: [CustomChartBarComponent, CustomModalHeaderComponent, CustomModalFooterComponent, PanelComponent]
})
export class SharedModule { }
