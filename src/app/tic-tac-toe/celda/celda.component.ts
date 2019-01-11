import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input } from '@angular/core';
import { takeWhile} from 'rxjs/operators';
import { TicTacToeService } from '../tic-tac-toe.service';

@Component({
  selector: 'ttt-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {

  alive = true;
  constructor(private renderer: Renderer2, private ref: ElementRef, private servicio: TicTacToeService) { 


    servicio.Cambio$.subscribe((estado) => {
      const jugador = estado[this.minitablero].data[this.index];
      const color = servicio.config.colores[jugador];
      this.renderer.setStyle(this.celda.nativeElement, 'background-color', color);
      if (jugador > 0 || !estado[this.minitablero].active) { // si la celda está ocupada o el minitablero al que pertenece no está activo
        this.renderer.setStyle(this.celda.nativeElement, 'cursor', 'not-allowed');
      } else {
        this.renderer.setStyle(this.celda.nativeElement, 'cursor', 'pointer');
      }
    });
  }

  @ViewChild('celda') celda: ElementRef;
  @Input() index = -1;
  @Input() minitablero = -1;
  @Input() jugador = 0;

  private fila = -1;
  private columna = -1;
  private tamanio = 200;
  ngOnInit() {
    console.log(this.ref.nativeElement.parentElement);
    console.log(this.ref.nativeElement.parentElement.offsetWidth);
    this.tamanio = this.ref.nativeElement.parentElement.offsetWidth / 3;
    // Lo situo

    this.fila = Math.floor(this.index / 3);
    this.columna = this.index % 3;
    // this.renderer.setStyle(this.celda.nativeElement, 'border', 'solid 3px green');
    this.renderer.setStyle(this.celda.nativeElement, 'top', this.fila * this.tamanio + 'px');
    this.renderer.setStyle(this.celda.nativeElement, 'left', this.columna * this.tamanio + 'px');
    this.renderer.setStyle(this.celda.nativeElement, 'width', this.tamanio + 'px');
    this.renderer.setStyle(this.celda.nativeElement, 'height', this.tamanio + 'px');

  }

  pulsado() {
    const j = this.servicio.setJugada(this.minitablero, this.index);
    if (j === 0) {
      // nada
    } else {

//      this.jugador = j;
      
  //    this.servicio.flipJugador();
    }
  }

}
