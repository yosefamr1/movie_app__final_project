import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { watchlistStore } from '../../store/watch.store';
import { Router } from '@angular/router';
import { WatchcardComponent } from '../watchcard-component/watchcard-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatchlist-component',
  imports: [CardModule,WatchcardComponent,CommonModule],
  templateUrl: './whatchlist-component.html',
  styleUrl: './whatchlist-component.scss'
})
export class WhatchlistComponent {
watch = inject(watchlistStore);
 watcharr= this.watch.wisharr

  constructor( private router: Router) {}


  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
