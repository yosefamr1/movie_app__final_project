import { Component, inject, Input, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { watchlistStore } from '../../stores/watch.store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-watchcard-component',
  imports: [CardModule,CommonModule,RouterModule],
  templateUrl: './watchcard-component.html',
  styleUrl: './watchcard-component.scss'
})
export class WatchcardComponent {
 @Input() movie: any;
 watch = inject(watchlistStore);


 toggleWish(event: Event, movie: any) {
    this.watch.togglemovie(event, this.movie);
    
  }

  isInWish(productId: number): boolean {
    return this.watch.isInwish(this.movie.id);
  }
}
