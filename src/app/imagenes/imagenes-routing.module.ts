import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ImagenesComponent } from './imagenes/imagenes.component';


const secondaryRoutes: Routes = [
  {
    path: 'imagenes', component: IndexComponent, children: [
      {path: '', redirectTo: '/imagenes/info', pathMatch: 'full'},
      { path: 'info',  component: ImagenesComponent}
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
export class ImagenesRoutingModule {

}
