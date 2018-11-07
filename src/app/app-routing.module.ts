import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMapaModule } from './demo-mapa/demo-mapa.module';
import { IndexMapaComponent} from './demo-mapa/index-mapa/index-mapa.component';
const routes: Routes = [
  {
    path: 'demomapa',
    component: IndexMapaComponent

  }
];

@NgModule({
  imports: [DemoMapaModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
