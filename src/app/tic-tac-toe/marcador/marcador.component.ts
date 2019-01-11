import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { TicTacToeService } from '../tic-tac-toe.service';
import { Input } from '@syncfusion/ej2-inputs';

@Component({
  selector: 'ttt-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  @ViewChild('siguiente') pSiguiente: ElementRef;

  jugadorActivo = 1;
  estado: any = null;
  constructor(private servicio: TicTacToeService, private renderer: Renderer2) {

    servicio.FlipJugador$.subscribe((jugador) => {
      this.jugadorActivo = jugador;
      renderer.setStyle(this.pSiguiente.nativeElement, 'background-color', servicio.config.colores[jugador]);
    });

    servicio.Cambio$.subscribe((estado) => {
      this.estado = estado;
    });
  }

  ngOnInit() {
  }

  nuevaPartida(): void {
    this.servicio.init();
  }

}
