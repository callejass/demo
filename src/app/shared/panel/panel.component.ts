import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scg-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  isCollapsed = false;
  // tslint:disable-next-line:no-input-rename
  @Input('titulo') title = 'Título no establecido';
  @Input() collapsable = false;
  ngOnInit() {
  }

}
