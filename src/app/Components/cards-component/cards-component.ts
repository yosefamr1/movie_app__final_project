import { Component, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Http } from '../../service/http';
import { Mooviecard } from "../mooviecard/mooviecard";


@Component({
  selector: 'app-cards-component',
  imports: [CardModule, ButtonModule, Mooviecard],
  templateUrl: './cards-component.html',
  styleUrl: './cards-component.scss'
})
export class CardsComponent implements OnInit {
  constructor(private http:Http){}
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

}
