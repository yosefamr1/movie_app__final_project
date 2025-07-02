import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { Nav } from "./Components/nav/nav";
import { CardsComponent } from "./Components/cards-component/cards-component";
import { WhatchlistComponent } from "./Components/whatchlist-component/whatchlist-component";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, CardsComponent, WhatchlistComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'movie_app__final_project';
}
