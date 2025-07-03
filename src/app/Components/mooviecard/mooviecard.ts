import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { watchlistStore } from '../../stores/watch.store';

@Component({
  selector: 'app-mooviecard',
  imports: [CommonModule,CardModule,ButtonModule],
  templateUrl: './mooviecard.html',
  styleUrl: './mooviecard.scss'
})
export class Mooviecard {
movie = input<any>();

 watch = inject(watchlistStore);


 toggleWish(event: Event, movie: any) {
    this.watch.togglemovie(event, this.movie());
    
  }

  isInWish(productId: number): boolean {
    return this.watch.isInwish(this.movie().id);
  }

}
