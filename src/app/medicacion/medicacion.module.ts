import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { IndexComponent } from './index/index.component';
import { ControlComponent } from './control/control.component';
import { MedicacionRoutingModule } from './medicacion-routing.module';

// tslint:disable-next-line:max-line-length
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { MedicinasComponent } from './medicinas/medicinas.component';
import { SharedModule } from '../shared/shared.module';
import { EdicionComponent } from './edicion/edicion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MenuModule,
    SharedModule,
    ScheduleModule,
    MedicacionRoutingModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService],
  declarations: [IndexComponent, ControlComponent, MedicinasComponent, EdicionComponent]
})
export class MedicacionModule { }
