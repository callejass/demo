import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {EJAngular2Module} from 'ej-angular2';
import { ChartModule, ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DemoControlesSyncfusionModule } from './demo-controles-syncfusion/demo-controles.module';
import { TicTacToeModule } from './tic-tac-toe/tic-tac-toe.module';
import { ImagenesModule } from './imagenes/imagenes.module';
import { VariosModule} from './varios/varios.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EJAngular2Module.forRoot(),
    ChartModule, ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    DemoControlesSyncfusionModule,
    TicTacToeModule,
    ImagenesModule,
    VariosModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
