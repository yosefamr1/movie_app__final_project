import { Component, OnInit, signal,Input, inject } from '@angular/core';
import { Http } from '../../service/http';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { RecommendedComponent } from "../recommended-component/recommended-component";
import { watchlistStore } from '../../stores/watch.store';

@Component({

  selector: 'app-details-component',
  imports: [CardModule, RatingModule, FormsModule, CommonModule, RouterModule, RecommendedComponent,],
  templateUrl: './details-component.html',
  styleUrl: './details-component.scss'
})
export class DetailsComponent implements OnInit {
  movie = signal<any>({});
 @Input() recommended = signal<any>({});

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }



ngOnInit(): void {
  this.route.params.subscribe(params => {
    const id = params['id'];
    if (id !== null) {
      // details
      this.http.getmoviebyid(id).subscribe((res: any) => {
        this.movie.set(res);
        console.log(this.movie());
      });

      // recommended
      this.http.getrecommended(id).subscribe((res: any) => {
        this.recommended.set(res);
        console.log("recommended:", this.recommended());
      });
    }
  });
}


goToDetails(id: number) {
  this.router.navigate(['/details', id]);
}
  get roundedVoteAverage() {
    return Math.round(this.movie()?.vote_average || 0);
  }



  watch = inject(watchlistStore);


 toggleWish( movie: any) {
    this.watch.togglemoviedetails(this.movie());
    
  }

  isInWish(productId: number): boolean {
    return this.watch.isInwish(this.movie().id);
  }

}
