import { Component, OnInit } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { Router } from '@angular/router';


@Component({
  selector: 'misc-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  menuItems: { [key: string]: Object }[] = [
    {
      header: 'Iconos', id: 'iconos'
     },
     {
      header: 'Loading', id: 'loading'
     },
     {
       header: 'Notificaciones', id: 'notificaciones'
     },
     {
       header: 'Formularios',
       subItems: [
        {text: 'Por plantilla', id: 'templatedriven'},
        {text: 'Reactivo', id: 'reactive'}
       ]
     }
  ];

  menuFields: Object = {
    text: ['header', 'text', 'value'],
    children: ['subItems', 'options']
  };
  ngOnInit() {
  }

  navegar($event: MenuEventArgs) {

    this.router.navigate(['varios', $event.item.id]);

  }
}
