import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';




@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {

  medicinas: Array<any>;
  dias: Array<Date> = []; //  ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.GetMedicinas().subscribe(medicinas => {
      this.medicinas = medicinas;
    });

    // fecha.setDate(1);
    const inicial: Date = new Date();
    inicial.setDate(inicial.getDate() - 7);


    // const final: Date = new Date();
    // final.setDate (final.getDate() + 7);
    // this.dias = this.getDateArray(inicial, final);
    // debugger;
    // const diainicial = inicial.getDate() - 7;

    const rango = 40;
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



  private getDateArray = function(inicial: Date, final: Date) {
    const arr = new Array<Date>();

    // dt = new Date(start);


    const fecha: Date = inicial;
    while (fecha <= final) {
      arr.push(fecha);
      fecha.setDate(fecha.getDate() + 1);
    }

    return arr;
  };


  drag(ev) {

    ev.dataTransfer.setData('text', ev.target.innerText);
  }
}
