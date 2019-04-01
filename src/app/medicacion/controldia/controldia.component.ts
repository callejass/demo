import { DataService } from '../data.service';
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-control-dia',
  templateUrl: './controldia.component.html',
  styleUrls: ['./controldia.component.scss']
})
export class ControlDiaComponent implements OnInit {



  // @Input() Fecha: Date;
  @Input() titulo: string;
  @Input() fecha: Date;
  tomas: Array<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.GetTomas().subscribe(tomas => {
      this.tomas = tomas.filter(item => {
         return this.fecha.getFullYear() === item.fecha.getFullYear() &&
         this.fecha.getDate() === item.fecha.getDate() &&
         this.fecha.getMonth() === item.fecha.getMonth();
      });
    });
  }

  // permitirSoltar(ev) {
  //   ev.preventDefault();
  // }

  // soltar(ev) {
  //   ev.preventDefault();
  //   const t = ev.dataTransfer.getData('text/plain');
  //   const data = JSON.parse(t);
  //   this.dataService.CrearToma(data.id, this.fecha, data.descripcion);
  //   // console.log(data);
  //   // const nuevo = $('<div>' + data.id + '</div>');
  //   // $(ev.target).append(nuevo);
  //   // ev.target.appendChild(document.getElementById(data));
  // }


  procesar(id: string, nuevoestado: boolean) {
    debugger;
    this.dataService.CambiarEstadoToma(id, nuevoestado);
  }

}
