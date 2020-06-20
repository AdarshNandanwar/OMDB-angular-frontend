import { Component, OnInit } from '@angular/core';
import { OmdbMovieService } from '../omdb-movie.service';
import { OmdbService } from '../omdb.service';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  searchTitle: string;
  movieID: string;
  omdbMovieServicesub: Subscription;

  actors: string;
  awards: string;
  boxOffice: string;
  country: string;
  DVD: string;
  director: string;
  genre: string;
  language: string;
  metascore: string;
  plot: string;
  poster: string;
  production: string;
  rated: string;
  ratings: string;
  released: string;
  response: string;
  runtime: string;
  title: string;
  type: string;
  website: string;
  writer: string;
  year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;

  constructor(
    private omdbMovieService: OmdbMovieService,
    private omdbService: OmdbService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movieID = this.omdbMovieService.movieID;
    this.getMovie();
  }

  ngOnDestroy(): void {
    this.omdbMovieServicesub.unsubscribe();
  }

  onClickSearch() {
    this.omdbService.searchTitle = this.searchTitle;
    this.router.navigate(['/search']);
  }

  getMovie() {
    this.omdbMovieServicesub = this.omdbMovieService.getMovie().subscribe(
      res => { this.getMovieSuccess(res); },
      err => { this.getMovieError(err); }
    )
  }

  getMovieSuccess(res) {
    this.actors = res.Actors;
    this.awards = res.Awards;
    this.boxOffice = res.BoxOffice;
    this.country = res.Country;
    this.DVD = res.DVD;
    this.director = res.Director;
    this.genre = res.Genre;
    this.language = res.Language;
    this.metascore = res.Metascore;
    this.plot = res.Plot;
    this.poster = res.Poster;
    this.production = res.Production;
    this.rated = res.Rated;
    this.ratings = res.Ratings;
    this.released = res.Released;
    this.response = res.Response;
    this.runtime = res.Runtime;
    this.title = res.Title;
    this.type = res.Type;
    this.website = res.Website;
    this.writer = res.Writer;
    this.year = res.Year;
    this.imdbID = res.imdbID;
    this.imdbRating = res.imdbRating;
    this.imdbVotes = res.imdbVotes;
  }

  getMovieError(err) {
    console.log(err);
  }

}
