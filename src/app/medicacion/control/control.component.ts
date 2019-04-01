import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  public currentDate: Date = new Date(2018, 10, 30);
  dias: Array<Date> = [];

  constructor() { }

  ngOnInit() {
    const rango = 7;
    for (let i = rango; i > 0; i--) {
      const fecha: Date = new Date();
      fecha.setDate(fecha.getDate() - i);
      this.dias.push(fecha);
    }

    for (let i = 0; i <= rango; i++) {
      const fecha: Date = new Date();
      fecha.setDate(fecha.getDate() + i);
      this.dias.push(fecha);
    }
  }

}

