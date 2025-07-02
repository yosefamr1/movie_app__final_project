import { Component, OnInit, signal } from '@angular/core';
import { Http } from '../../service/http';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-details-component',
  imports: [CardModule,RatingModule,FormsModule,CommonModule],
  templateUrl: './details-component.html',
  styleUrl: './details-component.scss'
})
export class DetailsComponent implements OnInit {
movie = signal<any>({});
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.http.getmoviebyid(id).subscribe((res:any) => {
        this.movie.set(res);
        console.log(this.movie());

      })
    }


  }
get roundedVoteAverage() {
  return Math.round(this.movie()?.vote_average || 0);
}

}
