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
    // const rango = 7;
    // for (let i = rango; i > 0; i--) {
    //   const fecha: Date = new Date();
    //   fecha.setDate(fecha.getDate() - i);
    //   this.dias.push(fecha);
    // }

    // for (let i = 0; i <= rango; i++) {
    //   const fecha: Date = new Date();
    //   fecha.setDate(fecha.getDate() + i);
    //   this.dias.push(fecha);
    // }
  }


  regenerarDias($event: any) {
    this.dias = [];
    const desde = new Date($event.fecha);
    let i = 0;
    while (i < $event.dias) {
      this.dias.push(new Date(desde));
      desde.setDate(desde.getDate() + 1);
      i++;
    }
  }

}

