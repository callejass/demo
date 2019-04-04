import { Component, OnInit, Input, OnDestroy, AfterViewInit, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';
import { switchMap, takeUntil, map } from 'rxjs/operators';



// https://medium.com/@OlegVaraksin/efficient-design-patterns-for-event-handling-with-rxjs-d49b56d2ae36
// https://medium.com/@OlegVaraksin/draggable-directive-and-how-to-make-angular-material-dialog-draggable-b112fa588bca

@Component({
  selector: 'scg-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('card', { read: ElementRef }) card: ElementRef;
  @ViewChild('cabecera', { read: ElementRef }) cabecera: ElementRef;
  

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private zone: NgZone) { }

  isCollapsed = false;
  isFixed = true;
  // tslint:disable-next-line:no-input-rename
  @Input('titulo') title = 'Título no establecido';
  @Input() collapsable = true;
  @Input() moveable = true;

  // private target: HTMLElement;
  // Drag handle
  // private handle: HTMLElement;
  // private delta = { x: 0, y: 0 };
  // private offset = { x: 0, y: 0 };

  private destroy$ = new Subject<void>();


  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngAfterViewInit(): void {

    if (this.moveable) {
      this.setupEvents();
    }

  }


  fijar() {
    this.isFixed = false;
    this.renderer.setStyle(this.card.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.card.nativeElement, 'top', '0px');
    this.renderer.setStyle(this.card.nativeElement, 'left', '0px');

  }


  private setupEvents() {

  this.zone.runOutsideAngular(() => {
    // const mousedown$ = fromEvent(this.handle, 'mousedown');
    const mousedown$ = fromEvent(this.cabecera.nativeElement, 'mousedown');
    const mousemove$ = fromEvent(document, 'mousemove');
    const mouseup$ = fromEvent(document, 'mouseup');

    

    // mousedown$.subscribe(a => {
    //   console.log(JSON.stringify(a));
    // });

    const mousedrag$ = mousedown$.pipe(
      switchMap((event: MouseEvent) => {
        let startX = event.clientX;
        let startY = event.clientY;
        return mousemove$.pipe(
          map((event2: MouseEvent) => {
            event2.preventDefault();
            const mov = {
              x: event2.movementX,
              y: event2.movementY
            };
            startX = event2.clientX;
            startY = event2.clientY;
            return mov;
          }),
          takeUntil(mouseup$),
          takeUntil(this.destroy$)
        );
      }),
      takeUntil(this.destroy$)
    );

    mousedrag$.subscribe(movimiento => {
      // console.log(movimiento);
      this.translate(movimiento);
    });


    mouseup$.pipe(
      takeUntil(this.destroy$)
    );
  });
}

  private translate(mov) {
  this.isFixed = false;
  const x = this.card.nativeElement.getBoundingClientRect().x + mov.x;
  const y = this.card.nativeElement.getBoundingClientRect().y + mov.y;
  this.renderer.setStyle(this.card.nativeElement, 'top', y + 'px');
  this.renderer.setStyle(this.card.nativeElement, 'left', x + 'px');
  this.renderer.setStyle(this.card.nativeElement, 'position', 'fixed');
  // requestAnimationFrame(() => {



  //   this.card.nativeElement.style.transform = `
  //     translate(${x}px,
  //               ${y}px)
  //   `;
  // });
}

}
