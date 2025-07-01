import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./Components/nav/nav";
import { CardsComponent } from "./Components/cards-component/cards-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, CardsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'movie_app__final_project';
}
