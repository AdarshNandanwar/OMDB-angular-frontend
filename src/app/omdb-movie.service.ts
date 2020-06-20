import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbMovieService {

  movieID: string;

  constructor(
    private http: HttpClient
  ) { }

  getMovie(): Observable<any> {
    const url = "http://localhost:3000/omdb/movie/"+this.movieID;
    return this.http.get(url);
  }
}
