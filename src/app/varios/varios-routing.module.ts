import { DemoIconosComponent } from './demo-iconos/demo-iconos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DemoLoadingComponent } from './demo-loading/demo-loading.component';
import { DemoTemplateDrivenFormComponent } from './demo-template-driven-form/demo-template-driven-form.component';
import { DemoReactiveFormComponent } from './demo-reactive-form/demo-reactive-form.component';
import { DemoNotificacionesComponent } from './demo-notificaciones/demo-notificaciones.component';



const secondaryRoutes: Routes = [
  {
    path: 'varios', component: IndexComponent, children: [
      {path: '', redirectTo: '/varios/iconos', pathMatch: 'full'},
      { path: 'iconos',  component: DemoIconosComponent},
      { path: 'loading',  component: DemoLoadingComponent},
      { path: 'notificaciones', component: DemoNotificacionesComponent},
      { path: 'templatedriven',  component: DemoTemplateDrivenFormComponent},
      { path: 'reactive',  component: DemoReactiveFormComponent}
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
