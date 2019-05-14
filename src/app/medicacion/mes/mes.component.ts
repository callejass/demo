import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.scss']
})
export class MesComponent implements OnInit {
  @Input() plantilla;

  titulo = '';
  fecha: Date = new Date();
  diassemana: Array<string> = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  medicinas: Array<any>;
  // previos: Array<number>;
  // posteriores: Array<number>;
  dias: Array<any> = [];
  constructor() { }

  ngOnInit() {
    const hoy = new Date();
    this.fecha = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    this.rellenarDias();
  }
  mesanterior() {
    this.fecha.setMonth(this.fecha.getMonth() - 1);
    this.rellenarDias();
  }
  messiguiente() {
    this.fecha.setMonth(this.fecha.getMonth() + 1);
    this.rellenarDias();
  }
  rellenarDias() {
    const anio = this.fecha.getFullYear();
    const mes = this.fecha.getMonth();
    this.dias = [];
    this.titulo = this.getMonthName(mes) + ' ' + anio;
    const desde = new Date(anio, mes, 1);
    const diasmes = this.daysInMonth(anio, mes);
    if (desde.getDay() !== 0) {
      desde.setDate(desde.getDate() - (desde.getDay() - 1));
    } else {
      desde.setDate(desde.getDate() - (7 - 1));
    }


    for (let i = 0; i < 42; i++) {
      const fecha = new Date(desde);
      this.dias.push({ fecha: new Date(desde), fuera: fecha.getMonth() !== mes });
      // para hacer un break si llegamos al último día
      if ((i + 1) % 7 === 0 && fecha.getDay() === 0 && (fecha.getMonth() !== mes || fecha.getDate() === diasmes)) {
        break;
      }

      desde.setDate(desde.getDate() + 1);
    }

  }
  regenerarDias($event: any) {

    const fecha = new Date($event.fecha);
    this.fecha = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
    this.rellenarDias();
  }
  daysInMonth(year, month) {
    month++;
    const isLeap = ((!(year % 4)) && ((year % 100) || (!(year % 400))));

    if (month === 2) {
      return (isLeap) ? 29 : 28;
    }
    return 30 + (month % 2);
  }
  private getMonthName(month) {
    // tslint:disable-next-line:max-line-length
    return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][month];
  }

}
