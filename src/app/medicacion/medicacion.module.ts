import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { IndexComponent } from './index/index.component';
import { ControlComponent } from './control/control.component';
import { MedicacionRoutingModule } from './medicacion-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// tslint:disable-next-line:max-line-length
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EdicionMedicinasComponent } from './edicionmedicinas/edicionmedicinas.component';
import { SharedModule } from '../shared/shared.module';
import { EdicionComponent } from './edicion/edicion.component';
import { EdicionDiaComponent } from './ediciondia/ediciondia.component';
import { ControlDiaComponent } from './controldia/controldia.component';
import { PapeleraComponent } from './papelera/papelera.component';
import { SelectorFechasComponent } from './selector-fechas/selector-fechas.component';
import { MedicinasComponent } from './medicinas/medicinas.component';
import { MesComponent } from './mes/mes.component';
import { DosisComponent } from './dosis/dosis.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MenuModule,
    SharedModule,
    ScheduleModule,
    MedicacionRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService],
  declarations: [IndexComponent, ControlComponent, EdicionMedicinasComponent,
    EdicionComponent, EdicionDiaComponent, ControlDiaComponent, PapeleraComponent, SelectorFechasComponent, MedicinasComponent, MesComponent, DosisComponent]
})
export class MedicacionModule { }
