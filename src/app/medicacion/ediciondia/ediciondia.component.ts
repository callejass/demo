import { DataService } from '../data.service';
import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edicion-dia',
  templateUrl: './ediciondia.component.html',
  styleUrls: ['./ediciondia.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EdicionDiaComponent implements OnInit, OnDestroy {

  private tomasSubscription: Subscription;
  // @Input() Fecha: Date;
  @Input() titulo: string;
  @Input() fecha: Date;
  tomas: Array<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.tomasSubscription = this.dataService.GetTomas().subscribe(tomas => {
      this.tomas = tomas.filter(item => {
         return this.fecha.getFullYear() === item.fecha.getFullYear() &&
         this.fecha.getDate() === item.fecha.getDate() &&
         this.fecha.getMonth() === item.fecha.getMonth();
      });
    });
  }
  ngOnDestroy(): void {

    this.tomasSubscription.unsubscribe();
    // throw new Error("Method not implemented.");
  }

  permitirSoltar(ev) {
    ev.preventDefault();
  }

  soltar(ev) {
    ev.preventDefault();
    const t = ev.dataTransfer.getData('text/plain');
    const data = JSON.parse(t);
    this.dataService.CrearToma(data.id, this.fecha, data.descripcion);
    // console.log(data);
    // const nuevo = $('<div>' + data.id + '</div>');
    // $(ev.target).append(nuevo);
    // ev.target.appendChild(document.getElementById(data));
  }


  procesar(id: string) {
    this.dataService.BorrarToma(id);
  }

}
