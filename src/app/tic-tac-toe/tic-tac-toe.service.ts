import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  constructor() { }

  private _error = new Subject<string>();
  private _flipJugador = new Subject<number>();
  private _cambio = new Subject<any>();
  private _ganar = new Subject<number>();


  private _jugadorActivo = 1;


  private _estadoInicial: any = [
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false}
  ];

  private _estado: any = [
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false},
    {ganador: 0, data: [0, 0, 0, 0, 0, 0, 0, 0, 0], active: true, finish: false}
  ];

  private ganador = 0;
  public config: any = {
    colores: ['white', 'red', 'blue']
  };

  public Error$ = this._error.asObservable();
  public FlipJugador$ = this._flipJugador.asObservable();
  public Cambio$ = this._cambio.asObservable();
  public Ganar$ = this._ganar.asObservable();

  public init(): void {
    this._jugadorActivo = 1;
    this._estado = this._estadoInicial;
    this.raiseCambioEstado();
  }

  public setJugada(minitablero: number, celda: number): number {

    if (this.jugadaPermitida(minitablero, celda)) {
      this._estado[minitablero].data[celda] = this._jugadorActivo;
      // aquí comprobariamos los posibles cambios de estado debido a la jugada
      this.recalcularEstado(minitablero, celda, this._jugadorActivo);
      const j = this._jugadorActivo;
      this.flipJugador();
      this.raiseCambioEstado();
      return j;
    } else {
      this.raiseError('jugada no permitida');
      return 0;
    }
  }


  private recalcularEstado(minitablero, celda, jugador) {
    // lo primero, establecemos el siguiente o siguientes tableros activos minitablero activo;
    // el siguiente tablero activo será el equivalente a la celda que se haya marcado
    // si este tablero está terminado bien porque lo haya ganado o porque se haya acabado en tablas
    // se activan todos aquellos que no estén terminados
    const siguiente = celda;

    this._estado.forEach((element, index) => {
       element.active = true; // para depuración, siempre activo
    });

    // if (this._estado[siguiente].ganador === 0) {
    //   // es posible activarlo, activamos ese y desactivamos el resto
    //   this._estado.forEach((element, index) => {
    //     //     element.active = true; // para depuración, siempre activo
    //      element.active = index === siguiente;
    //   });
    // } else {
    //   // el siguiente ya está terminado, hacemos activos todos los que no tengan ganador
    //   this._estado.forEach((element, index) => {
    //     element.active = (element.ganador === 0);
    //   });
    // }

    // solo para el minitablero donde se haya producido en cambio miro a ver si ha ganado alguien
    const ganador = this.checkMinitableroGanado(this._estado[minitablero].data, minitablero, celda, jugador);
    if (ganador) {
      this._estado[minitablero].ganador = jugador;
      // si se ha ganado un tablero es posible que se haya ganado el juego, lo compruebo
    } else {
      const empate = this.checkMiniTableroEmpatado(this._estado[minitablero].data, minitablero, celda, jugador);
      if (empate) {
        this._estado[minitablero].ganador = -1;
      }
    }

  }

  private checkMinitableroGanado(data, minitablero, celda, jugador): boolean {

    const x = celda % 3;
    const y = Math.floor(celda / 3);
    const tamanio = 3;

    // TODO Buscar otra forma de generar la matriz a partir de los datos
    const matriz: number[][] = [
      [data[0], data[1], data[2]],
      [data[3], data[4], data[5]],
      [data[6], data[7], data[8]]
    ];

    // comprobación de fila
    for (let i = 0; i < tamanio; i++) {
      if (matriz[y][i] !== jugador) { break; }
      if (i === tamanio - 1) { return true; }
    }
    // comprobación de columna
    for (let i = 0; i < 3; i++) {
      if (matriz[i][x] !== jugador) { break; }
      if (i === tamanio - 1) { return true; }
    }

    if (x === y) {

      for (let i = 0; i < tamanio; i++) {
        if (matriz[i][i] !== jugador) { break; }
        if (i === tamanio - 1) { return true; }
      }
    }
    if (x + y === tamanio - 1) {
      for (let i = 0; i < tamanio; i++) {
        if (matriz[i][(tamanio - 1) - i] !== jugador) { break; }
        if (i === tamanio - 1) { return true; }
      }
    }
    return false;
  }

  private checkMiniTableroEmpatado(data, minitablero, celda, jugador): boolean {
    // De momento consideramos el empate solo si están todas las casillas marcadas
    return data.filter(e => e > 0).length >= 9;
  }




  private jugadaPermitida(minitablero: number, celda: number): boolean {
    if (this._estado[minitablero].active && !this._estado[minitablero].finish) {
      return this._estado[minitablero].data[celda] === 0;
    } else {
      return false;
    }

  }
  private getJugadorActivo(): number {
    return this._jugadorActivo;
  }
  private flipJugador(): void {
    this._jugadorActivo = this._jugadorActivo === 1 ? 2 : 1;
    this._flipJugador.next(this._jugadorActivo);
  }


  private raiseCambioEstado(): void {
    this._cambio.next(this._estado);
  }
  private raiseError(mensaje: string): void {
    this._error.next(mensaje);
  }
}
