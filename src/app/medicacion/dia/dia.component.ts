import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.scss']
})
export class DiaComponent implements OnInit {



  // @Input() Fecha: Date;
  @Input() titulo: string;
  @Input() fecha: Date;
  constructor() { }

  ngOnInit() {
  }


  permitirSoltar(ev) {
    ev.preventDefault();
  }

  soltar(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const nuevo = $('<div>' + data + '</div>');
    $(ev.target).append(nuevo);
    ev.target.appendChild(document.getElementById(data));
  }
}
