
import { Component, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Http } from '../../service/http';
import { Mooviecard } from '../mooviecard/mooviecard';
import { RouterModule, Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cards-component',
  templateUrl: './cards-component.html',
  styleUrls: ['./cards-component.scss'],
  imports: [
    CardModule,
    ButtonModule,
    Mooviecard,
    RouterModule,
    PaginatorModule,
    FormsModule,
  ],
})
export class CardsComponent implements OnInit {
  constructor(private http: Http, private router: Router) {}

  movies = signal<any[]>([]);
  query: string = '';
  first: number = 0;
  rows: number = 10;
  isSearchActive: boolean = false;

  ngOnInit(): void {
    this.getmovieslist(1);
  }

  getmovieslist(currentpage: number) {
    this.isSearchActive = false;
    this.http.getmovielist(currentpage).subscribe((res: any) => {
      this.movies.set(res.results);
    });
  }

  onSearch() {
    if (!this.query.trim()) return;
    const encodedQuery = encodeURIComponent(this.query.trim());
this.http.search(encodedQuery).subscribe((res: any) => {
  console.log(res); // مهم
  this.movies.set(res.results || []);
});

    
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    const currentPage = event.page + 1;

    if (this.isSearchActive) {
      this.onSearch(); 
    } else {
      this.getmovieslist(currentPage);
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
