import { Component, OnInit } from '@angular/core';
import { MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { Router } from '@angular/router';
import { Library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'images-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  menuItems: { [key: string]: Object }[] = [
    {
      header: 'Imagenes', id: 'imagenes'
     }
  ];
  iconos: string[] = ['coffee', 'arrow-up', 'arrow-down'];
  menuFields: Object = {
    text: ['header', 'text', 'value'],
    children: ['subItems', 'options']
  };
  ngOnInit() {
    

  }
  navegar($event: MenuEventArgs) {
    
    this.router.navigate(['cognitive', $event.item.id]);

  }
}
