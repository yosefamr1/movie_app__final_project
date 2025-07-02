import { Component, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Http } from '../../service/http';
import { Mooviecard } from "../mooviecard/mooviecard";
import { RouterModule, Router } from '@angular/router';




@Component({
  selector: 'app-cards-component',
  imports: [CardModule, ButtonModule, Mooviecard,RouterModule],
  templateUrl: './cards-component.html',
  styleUrl: './cards-component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private http: Http, private router: Router) {}
movies=signal<any[]>([]);

  getmovieslist(){
    this.http.getmovielist().subscribe((m:any)=>{
      this.movies.set(m.results)
      console.log(this.movies());
      
    })
  }
  
ngOnInit(): void {
  this.getmovieslist();  
}

goToDetails(id: number) {
  this.router.navigate(['/details', id]);
}

 
}
