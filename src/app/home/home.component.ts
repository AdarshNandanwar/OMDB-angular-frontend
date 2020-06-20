import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTitle: string;

  constructor(
    private omdbService: OmdbService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickSearch() {
    this.omdbService.searchTitle = this.searchTitle;
    this.router.navigate(['/search']);
  }

}
