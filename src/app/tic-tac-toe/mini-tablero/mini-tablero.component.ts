import { Component, OnInit, Input, Renderer2, Renderer, ElementRef, ViewChild } from '@angular/core';
import { TicTacToeService } from '../tic-tac-toe.service';


@Component({
  selector: 'ttt-mini-tablero',
  templateUrl: './mini-tablero.component.html',
  styleUrls: ['./mini-tablero.component.css']
})
export class MiniTableroComponent implements OnInit {

  constructor(private renderer: Renderer2, private ref: ElementRef, servicio: TicTacToeService) {

    servicio.Cambio$.subscribe((estado) => {
      if (estado[this.index].active) {
        // this.renderer.setStyle(this.minitablero.nativeElement, 'border', 'solid 3px green');
        this.renderer.setStyle(this.minitablero.nativeElement, 'box-shadow', '5px 5px green');
      } else {
        // this.renderer.setStyle(this.minitablero.nativeElement, 'border', 'solid 3px red');
        this.renderer.setStyle(this.minitablero.nativeElement, 'box-shadow', 'none');
      }

      // si se ha ganado
      if (estado[this.index].ganador > 0 ) {
        this.renderer.setStyle(this.capaTerminado.nativeElement, 'background-color', servicio.config.colores[estado[this.index].ganador]);
        this.renderer.setStyle(this.capaTerminado.nativeElement, 'visibility', 'visible');
        // this.renderer.setStyle(this.minitablero.nativeElement, 'border', 'none');
        this.renderer.setStyle(this.minitablero.nativeElement, 'box-shadow', 'none');
      } else if (estado[this.index].ganador < 0) {
        this.renderer.setStyle(this.capaTerminado.nativeElement, 'background-color', servicio.config.colores[0]);
        this.renderer.setStyle(this.capaTerminado.nativeElement, 'visibility', 'visible');
        this.renderer.setStyle(this.minitablero.nativeElement, 'box-shadow', 'none');
      } else {
        this.renderer.setStyle(this.capaTerminado.nativeElement, 'visibility', 'hidden');
      }

    });

  }

  @ViewChild('mini') minitablero: ElementRef;
  @ViewChild('terminado') capaTerminado: ElementRef;
  @Input() index = -1;


  private fila = -1;
  private columna = -1;
  private tamanio = 200;
  private sep = 10;
  public celdas: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  ngOnInit() {
    this.tamanio = (this.ref.nativeElement.parentElement.offsetWidth - this.sep * 4) / 3;
    // Lo situo
    this.fila = Math.floor(this.index / 3);
    this.columna = this.index % 3;

    // this.renderer.setStyle(this.minitablero.nativeElement, 'border', 'solid 3px green');
    this.renderer.setStyle(this.minitablero.nativeElement, 'top', this.top(this.fila));
    this.renderer.setStyle(this.minitablero.nativeElement, 'left', this.left(this.columna));
    this.renderer.setStyle(this.minitablero.nativeElement, 'width', this.tamanio + 'px');
    this.renderer.setStyle(this.minitablero.nativeElement, 'height', this.tamanio + 'px');

    this.renderer.setStyle(this.capaTerminado.nativeElement, 'width', this.tamanio + 'px');
    this.renderer.setStyle(this.capaTerminado.nativeElement, 'height', this.tamanio + 'px');

  }

  private top(fila: number): string {
    return fila * this.tamanio + (fila + 1) * this.sep + 'px';
  }
  private left(columna: number): string {
    return columna * this.tamanio + (columna + 1) * this.sep + 'px';
  }
}
