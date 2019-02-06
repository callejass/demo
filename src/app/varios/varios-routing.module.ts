import { DemoIconosComponent } from './demo-iconos/demo-iconos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DemoLoadingComponent } from './demo-loading/demo-loading.component';



const secondaryRoutes: Routes = [
  {
    path: 'varios', component: IndexComponent, children: [
      {path: '', redirectTo: '/varios/iconos', pathMatch: 'full'},
      { path: 'iconos',  component: DemoIconosComponent},
      { path: 'loading',  component: DemoLoadingComponent}
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
