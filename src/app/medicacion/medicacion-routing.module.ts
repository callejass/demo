import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ControlComponent } from './control/control.component';

const secondaryRoutes: Routes = [
  {
    path: 'medicacion', component: IndexComponent, children: [
      {path: '', redirectTo: '/medicacion/control', pathMatch: 'full'},
      { path: 'control',  component: ControlComponent}
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
