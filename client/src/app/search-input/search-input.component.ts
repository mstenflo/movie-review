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
  userIsSearching: boolean;

  constructor(private movieService: MovieService) {
    this.userIsSearching = false;
  }

  searchForMovie(): void {
    this.movieService.searchForMovie(this.searchTerm).subscribe(response => this.foundMovies = response.results);
  }

  toggleSearch(flag: boolean): void {
    this.userIsSearching = flag;
  }

  delayToggleSearch(flag: boolean): void {
    setTimeout(() => {
      this.toggleSearch(flag);
    }, 200);
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

}
