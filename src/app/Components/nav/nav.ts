import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { watchlistStore } from '../../store/watch.store';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
watch = inject(watchlistStore);

}
