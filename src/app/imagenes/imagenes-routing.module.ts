import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ReconocedorCarasComponent } from './reconocedor-caras/reconocedor-caras.component';


const secondaryRoutes: Routes = [
  {
    path: 'imagenes', component: IndexComponent, children: [
      {path: '', redirectTo: '/imagenes/faces', pathMatch: 'full'},
      { path: 'faces',  component: ReconocedorCarasComponent}
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
