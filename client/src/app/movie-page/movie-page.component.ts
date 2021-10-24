import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movie!: Movie;
  reviews!: Review[];

  constructor(
    private activatedRoute : ActivatedRoute,
    private movieService : MovieService,
    private reviewService : ReviewService
  ) { }

  private retrieveMovie(id: string) {
    this.movieService.retrieveMovieById(id).subscribe(response => this.movie = response);
  }

  private retrieveReviews(id: string) {
    this.reviewService.getReviewsByMovie(id).subscribe(response => this.reviews = response);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");

      this.retrieveMovie(id!);
      this.retrieveReviews(id!);
    });
  }

}
