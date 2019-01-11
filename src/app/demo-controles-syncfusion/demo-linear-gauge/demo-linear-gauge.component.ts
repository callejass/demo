import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-linear-gauge',
  templateUrl: './demo-linear-gauge.component.html',
  styleUrls: ['./demo-linear-gauge.component.css']
})
export class DemoLinearGaugeComponent implements OnInit {
  public Label = '{{value}}K';
  public Pointers: Object[] = [{
    description: 'Felicidad',
    value: 10,
    color: 'green',
    height: 15,
    width: 15,
    placement: 'Near',
    offset: -70,
    type: 'Bar'
  },
  {
    description: 'tristeza',
    color: ' blue',
    value: 50,
    height: 15,
    width: 15,
    placement: 'Near',
    offset: -100,
    type: 'Bar'
  }];

  public Annotations: Object[] = [
    {zIndex: 1000, axisIndex: 0, content: 'tristeza', x: 100, y: 100, verticalAlignment: 'Center', horizontalAlignment: 'Center'},
    {axisIndex: 0, content: 'alegria', x: 100, y: 200},
  ];


  public Axes: Object[] = [{
    pointers: this.Pointers,
    majorTicks: {
      color: '#9E9E9E',
      interval: 10
    },
    minorTicks: {
      color: '#9E9E9E',
      interval: 1
    },
    labelStyle: {
      offset: 48
    }
  }];
  public Annotation: Object = [{
    content: '<div id="pointer" style="width:70px"><h1 style="font-size:14px;">10 MPH</h1></div>',
    axisIndex: 0,
    axisValue: 10,
    x: 10,
    y: -70, zIndex: '1',
  }];
  constructor() { }

  ngOnInit() {
    //this.Pointers[0].value = 90;
  }

  load($event) {

  }
}
