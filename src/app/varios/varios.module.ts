import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule, TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { DemoIconosComponent } from './demo-iconos/demo-iconos.component';
import { VariosRoutingModule } from './varios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DemoLoadingComponent } from './demo-loading/demo-loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DemoTemplateDrivenFormComponent } from './demo-template-driven-form/demo-template-driven-form.component';
import { DemoReactiveFormComponent } from './demo-reactive-form/demo-reactive-form.component';
import { DemoNotificacionesComponent } from './demo-notificaciones/demo-notificaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomModalModule } from '../custom-modal/custom-modal.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    VariosRoutingModule,
    SharedModule,
    FontAwesomeModule,
    SliderModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CustomModalModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [IndexComponent, DemoIconosComponent, DemoLoadingComponent, DemoTemplateDrivenFormComponent, DemoReactiveFormComponent, DemoNotificacionesComponent]
})
export class VariosModule { }
