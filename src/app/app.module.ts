import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as lrxjs from 'leaflet-rxjs';
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
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { GaleriasModule } from './galerias/galerias.module';
import { MedicacionModule } from './medicacion/medicacion.module';
import { HomeModule } from './home/home.module';
import { AemetModule } from './aemet/aemet.module';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  exports: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EJAngular2Module.forRoot(),
    ChartModule, ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    NgbModule,
    DemoControlesSyncfusionModule,
    TicTacToeModule,
    CognitiveModule,
    VariosModule,
    GaleriasModule,
    MedicacionModule,
    HomeModule,
    AemetModule,
    AppRoutingModule,
    // LeafletModule.forRoot(),
    LayoutModule,
    SharedModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, fab);
  }
}
