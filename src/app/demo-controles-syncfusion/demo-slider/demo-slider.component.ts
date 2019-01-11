import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-slider',
  templateUrl: './demo-slider.component.html',
  styleUrls: ['./demo-slider.component.css']
})
export class DemoSliderComponent implements OnInit {

  constructor() { }

  public minType = 'MinRange';
  public rangeType = 'Range';
  public minValue = 30;
  public rangeValue = [30, 70];
  public tooltip: Object = { placement: 'After', isVisible: true, showOn: 'Always' };
  ngOnInit() {
  }

}
