import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Http {

  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE2NTllYzY2N2JmOWUzMTE3YzllNzM5ZGY0ZmE0ZSIsIm5iZiI6MTc1MTExNDIxMy40MjgsInN1YiI6IjY4NWZlMWU1MjIzMTcyYjE4OTkxNTY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xdsbm_NKwUoOE7p5hdXcEdcQf3D9WFSxdgqqZRttDBY'
  })


  constructor(private http: HttpClient) { }

  getmovielist() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,{headers:this.headers});
  }

}
