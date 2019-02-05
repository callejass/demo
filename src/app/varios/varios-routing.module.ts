import { DemoIconosComponent } from './demo-iconos/demo-iconos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';



const secondaryRoutes: Routes = [
  {
    path: 'varios', component: IndexComponent, children: [
      {path: '', redirectTo: '/varios/iconos', pathMatch: 'full'},
      { path: 'iconos',  component: DemoIconosComponent}
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
export class VariosRoutingModule {

}
