import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Router } from '@angular/router';
import { SharedModule} from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbModule.forRoot(),
    FontAwesomeModule
  ],
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  exports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class LayoutModule { }
