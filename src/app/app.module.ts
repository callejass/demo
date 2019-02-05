import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EJAngular2Module } from 'ej-angular2';
import { ChartModule, ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DemoControlesSyncfusionModule } from './demo-controles-syncfusion/demo-controles.module';
import { TicTacToeModule } from './tic-tac-toe/tic-tac-toe.module';
import { CognitiveModule } from './cognitive/cognitive.module';
import { VariosModule } from './varios/varios.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EJAngular2Module.forRoot(),
    ChartModule, ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    NgbModule,
    DemoControlesSyncfusionModule,
    TicTacToeModule,
    CognitiveModule,
    VariosModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    LayoutModule,
    SharedModule,
    FontAwesomeModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}
