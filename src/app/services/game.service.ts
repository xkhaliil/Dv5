import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
@Injectable({
providedIn: 'root'
})
export class GameService {
  games : Game[]; 
constructor() {
  this.games = [
    {idGame : 1, nomGame : "Call Of Duty", prixGame : 299, dateCreation : new Date("01/14/2022")},
    {idGame : 2, nomGame : "Elden Ring", prixGame : 200, dateCreation : new Date("12/17/2022")},
    {idGame : 3, nomGame :"Rainbow 6 Siege", prixGame : 120, dateCreation : new Date("02/20/2015")},
    {idGame : 4, nomGame :"Valorant", prixGame : 0, dateCreation : new Date("05/22/2020")}
    ];
}
listeGames():Game[] {
return this.games;
}
ajouterGame( game: Game){
this.games.push(game);
}
}