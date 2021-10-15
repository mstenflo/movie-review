import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  movies : Movie[] = [];

  constructor(private movieService : MovieService) {
    console.log(this.movies);
   }

  ngOnInit(): void {
    this.getMovies();
  }

  
  public getMovies() : void {
    this.movieService.getMovies().subscribe(response => (this.movies = response.items));
  }
  

}
