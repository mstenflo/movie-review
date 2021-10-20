import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie!: Movie;

  constructor(
    private activatedRoute : ActivatedRoute,
    private movieService : MovieService
  ) { }

  private retrieveMovie(id: string) {
    this.movieService.retrieveMovieById(id).subscribe(response => this.movie = response);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");

      this.retrieveMovie(id!);
    });
  }

}
