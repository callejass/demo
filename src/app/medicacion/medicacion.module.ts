import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { IndexComponent } from './index/index.component';
import { ControlComponent } from './control/control.component';
import { MedicacionRoutingModule } from './medicacion-routing.module';

import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MenuModule,
    ScheduleModule,
    MedicacionRoutingModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  declarations: [IndexComponent, ControlComponent]
})
export class MedicacionModule { }
