import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-iconos',
  templateUrl: './demo-iconos.component.html',
  styleUrls: ['./demo-iconos.component.scss']
})
export class DemoIconosComponent implements OnInit {

  constructor() { }
  tamanioSpinner = 1;
  isSyncAnimated = true;
  iconosSpinner = [
    'asterisk', 'atom', 'certificate', 'circle-notch', 'cog', 'compact-disc',
     'compass', 'crosshairs', 'dharmachakra', 'haykal', 'life-ring',
     'palette', 'ring', 'slash', 'snowflake',
    'spinner', 'stroopwafel', 'sun',  'sync', 'sync-alt', 'yin-yang'
  ];


  ngOnInit() {
  }

}
