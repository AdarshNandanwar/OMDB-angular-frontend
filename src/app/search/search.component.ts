import { Component, OnInit, OnDestroy } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { OmdbMovieService } from '../omdb-movie.service';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchTitle: string;
  movies = [];
  omdbServicesub: Subscription;

  constructor(
    private omdbService: OmdbService,
    private omdbMovieService: OmdbMovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchTitle = this.omdbService.searchTitle;
    this.searchMovies();
  }

  ngOnDestroy(): void {
    this.omdbServicesub.unsubscribe();
  }

  searchMovies() {
    this.omdbServicesub = this.omdbService.searchMovies().subscribe(
      res => { this.searchSuccess(res); },
      err => { this.searchError(err); }
    )
  }

  searchSuccess(res) {
    this.movies = res.Search;
  }

  searchError(err) {
    console.log(err);
  }

  onClickSearch() {
    this.omdbService.searchTitle = this.searchTitle;
    this.searchMovies();
  }

  onClickMovie(imdbID: string) {
    this.omdbMovieService.movieID = imdbID;
    this.router.navigate(['/movie']);
  }

}
