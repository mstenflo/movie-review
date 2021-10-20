import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  movies : Movie[] = [];
  mode: ProgressSpinnerMode = "indeterminate";
  color: string = "black";

  constructor(
    private movieService : MovieService,
    private logger : LoggerService
  ) {
    
  }

  ngOnInit(): void {
    this.getMovies();
    fetch("http://localhost:8001/api/users")
      .then(res => res.json())
      .then(data => this.logger.log(data));
  }

  
  public getMovies() : void {
    this.movieService.getMovies().subscribe(response => (this.movies = response.items));
  }
  

}
