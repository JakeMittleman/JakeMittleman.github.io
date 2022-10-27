import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  GUESS_WHO = "GUESS";
  PHOTO = "PHOTO";
  MAD_LIBS = "MAD";

  currentGame: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  switchGame(gameToSwitchTo: string) {
    this.currentGame = gameToSwitchTo;
  }

  clearGameSelection() {
    this.currentGame = "";
  }

}
