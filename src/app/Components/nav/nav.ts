import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}
