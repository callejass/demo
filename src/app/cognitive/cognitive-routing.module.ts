import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ImagenesComponent } from './imagenes/imagenes.component';


const secondaryRoutes: Routes = [
  {
    path: 'cognitive', component: IndexComponent, children: [
      {path: '', redirectTo: '/cognitive/imagenes', pathMatch: 'full'},
      { path: 'imagenes',  component: ImagenesComponent}
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
export class CognitiveRoutingModule {

}
