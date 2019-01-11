import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'images-reconocedor-caras',
  templateUrl: './reconocedor-caras.component.html',
  styleUrls: ['./reconocedor-caras.component.css']
})
export class ReconocedorCarasComponent implements OnInit {

  imagenes: any[] = [];
  count = 0;
  triggered = false;
  public tabObject: any;
  constructor() { }

  ngOnInit() {
  }

  addImagen($event) {
    this.imagenes.push($event);
  }

}
