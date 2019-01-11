import { Component, OnInit } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-demo-controles-syncfusion',
  templateUrl: './index-demo-controles-syncfusion.component.html',
  styleUrls: ['./index-demo-controles-syncfusion.component.css']
})
export class IndexDemoControlesSyncfusionComponent implements OnInit {
  menuItems: { [key: string]: Object }[] = [
    {
      header: 'Controles',
      subItems: [
        { text: 'Slider', id: 'slider' },
        { text: 'Color Picker', id: 'colorpicker' },
        { text: 'Linear Gauge', id: 'lineargauge' },
        { text: 'Chart', id: 'chart' }

      ]
    },
    {
      header: 'Informes',
      subItems: [
        { text: 'Reporting', id: 'reporting' }
      ]
    }, {
      header: 'Tablas',
      subItems: [
        { text: 'Básica', id: 'tbasica'}
      ]
    }
  ];

  menuFields: Object = {
    text: ['header', 'text', 'value'],
    children: ['subItems', 'options']
  };


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navegar($event: MenuEventArgs) {
    this.router.navigate(['demosyncfusion', $event.item.id]);
    console.log($event);
  }

}
