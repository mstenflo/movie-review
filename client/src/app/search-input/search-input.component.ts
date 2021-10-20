import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Input() searchTerm!: string;
  foundMovies!: Movie[];

  constructor(private movieService: MovieService) { }

  searchForMovie(): void {
    this.movieService.searchForMovie(this.searchTerm).subscribe(response => this.foundMovies = response.results);
  }

  ngOnChanges(): void {
    this.searchForMovie();
  }

  ngOnInit(): void {
  }

}
