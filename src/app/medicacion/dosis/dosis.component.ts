import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dosis',
  templateUrl: './dosis.component.html',
  styleUrls: ['./dosis.component.scss']
})
export class DosisComponent implements OnInit {

  @Input() text: string;

  circuloentero = true;
  d = '';
  constructor() { }

  ngOnInit() {

    const reg = /^\((\d?)\/\d?\)\s?.*/;
    const matches = this.text.match(reg);
    let angulo = 0;
    if (matches != null) {
      switch (matches[1]) {
        case '1':
          angulo = 90;
          this.circuloentero = false;
          break;
        case '2':
          angulo = 180;
          this.circuloentero = false;
          break;
        case '3':
          angulo = 270;
          this.circuloentero = false;
          break;
      }
    }
    this.d = this.describeArc(15, 15, 15, 0, angulo);

    // this.circuloentero = this.text.indexOf('(4/4)') > -1;



  }


  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  private describeArc(x, y, radius, startAngle, endAngle) {

      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);

      const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

      const d = [
          'M', start.x, start.y,
          'A', radius, radius, 0, arcSweep, 0, end.x, end.y,
          'L', x, y,
          'L', start.x, start.y
      ].join(' ');

      // console.log(d);

      return d;
  }
  
  

}
