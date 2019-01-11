import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from '../tic-tac-toe.service';

@Component({
  selector: 'ttt-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {


  
  constructor(private servicio: TicTacToeService) {

    servicio.Error$.subscribe((a) => {
      console.log('He capturado el evento ' + a);
    });

  }

  public minitableros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  ngOnInit() {



  }

}
