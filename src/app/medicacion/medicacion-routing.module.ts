import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ControlComponent } from './control/control.component';
import { EdicionMedicinasComponent } from './edicionmedicinas/edicionmedicinas.component';
import { EdicionComponent } from './edicion/edicion.component';

const secondaryRoutes: Routes = [
  {
    path: 'medicacion', component: IndexComponent, children: [
      {path: '', redirectTo: '/medicacion/edicion', pathMatch: 'full'},
      { path: 'control',  component: ControlComponent},
      { path: 'edicion', component: EdicionComponent},
      { path: 'medicinas',  component: EdicionMedicinasComponent}
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
export class MedicacionRoutingModule {

}
