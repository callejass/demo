import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  menuItems: { [key: string]: Object }[] = [
    {
      header: 'Control', id: 'control'
    },
    {
      header: 'Edición', id: 'edicion'
    }, {
      header: 'Medicinas', id: 'medicinas'
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
    this.router.navigate(['medicacion', $event.item.id]);
    console.log($event);
  }
}
