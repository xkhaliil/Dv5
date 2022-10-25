import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games : Game[]; //un tableau de chînes de caractères

  constructor(private gameService: GameService ) {
    this.games = gameService.listeGames();
    }

  ngOnInit(): void {
  }
  supprimerGame(p: Game)
  {
  console.log(p);
  }
}
