import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Http } from '../../service/http';
import { Router } from '@angular/router';
import { Mooviecard } from "../mooviecard/mooviecard";
import { TvcardComponent } from "../tvcard-component/tvcard-component";
@Component({
  selector: 'app-tv-component',
  imports: [CardModule, ButtonModule, RouterModule, Mooviecard, TvcardComponent],
  templateUrl: './tv-component.html',
  styleUrl: './tv-component.scss',
})
export class TvComponent implements OnInit {
  constructor(private http: Http, private router: Router) {}
  tvshows = signal<any[]>([]);

  gettvshowslist() {
    this.http.gettvlist().subscribe((m: any) => {
      this.tvshows.set(m.results);
      console.log(this.tvshows());
    });
  }

  ngOnInit(): void {
  this.gettvshowslist();  
}

goToDetails(id: number) {
  this.router.navigate(['/tvdetails', id]);
}



}
