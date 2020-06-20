import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  searchTitle: string = "";

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(): Observable<any> {
    if(this.searchTitle === undefined || this.searchTitle === null) this.searchTitle = '';
    const url = "http://localhost:3000/omdb/search?title="+this.searchTitle;
    return this.http.get(url);
  }
}
