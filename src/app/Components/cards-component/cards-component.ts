import { Component, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Http } from '../../service/http';
import { Mooviecard } from '../mooviecard/mooviecard';
import { RouterModule, Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-cards-component',
  imports: [
    CardModule,
    ButtonModule,
    Mooviecard,
    RouterModule,
    PaginatorModule,
  ],
  templateUrl: './cards-component.html',
  styleUrl: './cards-component.scss',
})
export class CardsComponent implements OnInit {
  constructor(private http: Http, private router: Router) {}
  movies = signal<any[]>([]);

  getmovieslist(currentpage: any) {
    this.http.getmovielist(currentpage).subscribe((m: any) => {
      this.movies.set(m.results);
      console.log(this.movies());
    });
  }

  ngOnInit(): void {
    this.getmovieslist(1);
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  //////Paginator///////////////
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first ;
    this.rows = event.rows ;
    let currentpage = event.page + 1;
    this.getmovieslist(currentpage);
  }
}
