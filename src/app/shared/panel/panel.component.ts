import { Component, OnInit, Input, OnDestroy, AfterViewInit, ElementRef, ViewChild, Renderer2, NgZone } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';


// https://medium.com/@OlegVaraksin/efficient-design-patterns-for-event-handling-with-rxjs-d49b56d2ae36
// https://medium.com/@OlegVaraksin/draggable-directive-and-how-to-make-angular-material-dialog-draggable-b112fa588bca

@Component({
  selector: 'scg-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy, AfterViewInit {



  @ViewChild('card', {read: ElementRef}) card: ElementRef;
  @ViewChild('cabecera', {read: ElementRef}) cabecera: ElementRef;
  dragHandle: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private zone: NgZone) { }

  isCollapsed = false;
  isFixed = true;
  // tslint:disable-next-line:no-input-rename
  @Input('titulo') title = 'Título no establecido';
  @Input() collapsable = true;
  @Input() moveable = true;





  private target: HTMLElement;
  // Drag handle
  private handle: HTMLElement;
  private delta = {x: 0, y: 0};
  private offset = {x: 0, y: 0};

  private destroy$ = new Subject<void>();


  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngAfterViewInit(): void {

    this.handle = this.dragHandle ? document.querySelector(this.dragHandle) as HTMLElement :
                                    this.elementRef.nativeElement;
   // this.target = document.querySelector(this.dragTarget) as HTMLElement;
    this.setupEvents();

  }


  toggleMovible() {
    this.isFixed = !this.isFixed;
  }

  private setupEvents() {

    // this.zone.runOutsideAngular(() => {
    //   const mousedown$ = fromEvent(this.handle, 'mousedown');
    //   const mousemove$ = fromEvent(document, 'mousemove');
    //   const mouseup$ = fromEvent(document, 'mouseup');


    //   let mousedrag$ = mousedown$.switchMap((event: MouseEvent) => {
    //     let startX = event.clientX;
    //     let startY = event.clientY;

    //     return mousemove$
    //       .map((event: MouseEvent) => {
    //         event.preventDefault();
    //         this.delta = {
    //           x: event.clientX - startX,
    //           y: event.clientY - startY
    //         };
    //       })
    //       .takeUntil(mouseup$);
    //   }).takeUntil(this.destroy$);

    //   mousedrag$.subscribe(() => {
    //     if (this.delta.x === 0 && this.delta.y === 0) {
    //       return;
    //     }

    //     this.translate();
    //   });

    //   mouseup$.takeUntil(this.destroy$).subscribe(() => {
    //     this.offset.x += this.delta.x;
    //     this.offset.y += this.delta.y;
    //     this.delta = {x: 0, y: 0};
    //   });
    // });
  }

  private translate() {


    // requestAnimationFrame(() => {
    //   this.target.style.transform = `
    //     translate(${this.offset.x + this.delta.x}px,
    //               ${this.offset.y + this.delta.y}px)
    //   `;
    // });
  }

}
