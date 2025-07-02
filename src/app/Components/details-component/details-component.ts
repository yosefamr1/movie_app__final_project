import { Component, OnInit, signal } from '@angular/core';
import { Http } from '../../service/http';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-details-component',
  imports: [CardModule],
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

}
