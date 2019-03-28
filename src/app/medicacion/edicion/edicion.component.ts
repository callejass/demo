import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



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



  drag(ev) {

    ev.dataTransfer.setData('text', ev.target.innerText);
  }
}
