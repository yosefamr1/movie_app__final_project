import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from "./button-demo/button-demo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonDemo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'movie_app__final_project';
}
