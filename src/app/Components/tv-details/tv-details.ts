import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { Http } from '../../service/http';
import { RecommendedComponent } from '../recommended-component/recommended-component';

@Component({
  selector: 'app-tv-details',
  imports: [CardModule,RatingModule,FormsModule,CommonModule,RouterModule,RecommendedComponent],
  templateUrl: './tv-details.html',
  styleUrl: './tv-details.scss'
})
export class TvDetails {
  movie = signal<any>({});
 @Input() recommended = signal<any>({});
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      //details
      this.http.gettvbyid(id).subscribe((res: any) => {
        this.movie.set(res);
        console.log(this.movie());
        })
        //recommended 
        this.http.getrecommendedtv(id).subscribe((res: any) => {
          this.recommended.set(res);
                  console.log("recommended :"+ this.recommended());

        })
      
    
    }


    
  }


goToDetails(id: number) {
  this.router.navigate(['/details', id]);
}
  get roundedVoteAverage() {
    return Math.round(this.movie()?.vote_average || 0);
  }

}
