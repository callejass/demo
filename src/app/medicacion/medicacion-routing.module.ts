import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ControlComponent } from './control/control.component';
import { MedicinasComponent } from './medicinas/medicinas.component';
import { EdicionComponent } from './edicion/edicion.component';

const secondaryRoutes: Routes = [
  {
    path: 'medicacion', component: IndexComponent, children: [
      {path: '', redirectTo: '/medicacion/control', pathMatch: 'full'},
      { path: 'control',  component: ControlComponent},
      { path: 'edicion', component: EdicionComponent},
      { path: 'medicinas',  component: MedicinasComponent}
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
