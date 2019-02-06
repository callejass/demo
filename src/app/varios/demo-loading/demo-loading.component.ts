import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from 'q';

@Component({
  selector: 'misc-demo-loading',
  templateUrl: './demo-loading.component.html',
  styleUrls: ['./demo-loading.component.scss']
})
export class DemoLoadingComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  tiempo = 5000;
  ngOnInit() {
  }

  activar() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, this.tiempo);
  }
}
