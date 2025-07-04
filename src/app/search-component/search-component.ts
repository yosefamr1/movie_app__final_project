import { Component, ChangeDetectorRef } from '@angular/core';
import { Http } from '../service/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, ButtonModule, PaginatorModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss'
})
export class SearchComponent {
  query: string = '';
  movies: any[] = [];
  loading: boolean = false;
  searched: boolean = false;

  constructor(
    private http: Http,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  onSearch() {
    if (!this.query.trim()) return;

    this.loading = true;
    const encodedQuery = encodeURIComponent(this.query.trim());

    this.http.search(`query=${encodedQuery}`).subscribe((res: any) => {
      this.movies = res.results || [];
      this.loading = false;
      this.searched = true;
      this.cd.detectChanges(); // لمنع ExpressionChangedAfterItHasBeenCheckedError
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
