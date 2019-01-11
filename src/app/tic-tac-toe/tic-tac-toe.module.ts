import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero/tablero.component';
import { MiniTableroComponent } from './mini-tablero/mini-tablero.component';
import { CeldaComponent } from './celda/celda.component';
import { IndexTicTacToeComponent } from './index-tic-tac-toe/index-tic-tac-toe.component';
import { MarcadorComponent } from './marcador/marcador.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableroComponent, MiniTableroComponent, CeldaComponent, IndexTicTacToeComponent, MarcadorComponent]
})
export class TicTacToeModule { }
