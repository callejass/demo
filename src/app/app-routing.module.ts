import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMapaModule } from './demo-mapa/demo-mapa.module';
import { IndexMapaComponent } from './demo-mapa/index-mapa/index-mapa.component';
import { DemoControlesSyncfusionModule } from './demo-controles-syncfusion/demo-controles.module';
import { IndexTicTacToeComponent } from './tic-tac-toe/index-tic-tac-toe/index-tic-tac-toe.component';
import { IndexComponent as IndexCognitive } from './cognitive/index/index.component';
import { IndexComponent as IndexVarios} from './varios/index/index.component';
import { IndexComponent as IndexGalerias} from './galerias/index/index.component';
import { IndexComponent as IndexMedicacion} from './medicacion/index/index.component';
import { IndexComponent as IndexHomeComponent} from './home/index/index.component';
import { IndexComponent as IndexAemetComponent} from './aemet/index/index.component';
// tslint:disable-next-line:max-line-length
import { IndexDemoControlesSyncfusionComponent } from './demo-controles-syncfusion/index-demo-controles-syncfusion/index-demo-controles-syncfusion.component';
import { LoginComponent } from './login/login.component';
// import { DemoColorPickerComponent} from './demo-controles-syncfusion/demo-color-picker/demo-color-picker.component';
// import { DemoSliderComponent} from './demo-controles-syncfusion/demo-slider/demo-slider.component';
const routes: Routes = [
  {
    path: '',
    component: IndexHomeComponent
  },
  {
    path: 'aemet',
    component: IndexAemetComponent
  },
  {
    path: 'demomapa',
    component: IndexMapaComponent
   }, {
    path: 'tictactoe',
    component: IndexTicTacToeComponent
   } , {
    path: 'cognitive',
    component: IndexCognitive
   },
   {
    path: 'galerias',
    component: IndexGalerias
   },
   {
     path: 'medicacion',
     component: IndexMedicacion
   }
   , {
    path: 'varios',
    component: IndexVarios
   } // ,
  // {
  //   path: 'demosyncfusion',
  //   component: IndexDemoControlesSyncfusionComponent,
  //   outlet: ''
  //   children: [
  //     {path: '', redirectTo: 'colorpicker', pathMatch : 'prefix'},
  //     {path: 'colorpicker', component: DemoColorPickerComponent},
  //     {path: 'slider', component: DemoSliderComponent},
  //   ]
  // }
];

@NgModule({
  imports: [DemoMapaModule, DemoControlesSyncfusionModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

