import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component';
const routes: Routes = [
{path: "games", component : GamesComponent},
{path: "add-game", component : AddGameComponent},
{ path: "", redirectTo: "games", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
