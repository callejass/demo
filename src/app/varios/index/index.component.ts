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
