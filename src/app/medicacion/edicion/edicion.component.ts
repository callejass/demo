import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {

  medicinas: Array<any>;
  dias: Array<string> = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.GetMedicinas().subscribe(medicinas => {
      this.medicinas = medicinas;
    });

  }

  permitirSoltar(ev) {
    ev.preventDefault();
  }

  drag(ev) {

    ev.dataTransfer.setData('text', ev.target.innerText);
  }

  soltar(ev) {
    ev.preventDefault();

    const data = ev.dataTransfer.getData('text');
    const nuevo = $('<div>' + data + '</div>');
    $(ev.target).append(nuevo);
    ev.target.appendChild(document.getElementById(data));
  }
}
