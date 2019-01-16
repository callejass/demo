import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'images-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

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
