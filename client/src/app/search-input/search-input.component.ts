import { Component, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  animations: [
    trigger('searchOpenState', [
      state("show", style({
        display: "block",
        opacity: 1
      })),
      state("hide", style({
        display: "none",
        opacity: 0,
      })),
      transition("show => hide", animate("200ms ease-out")),
      transition("hide => show", animate("200ms ease-in"))
    ])
  ]
})
export class SearchInputComponent implements OnInit {

  @Input() searchTerm!: string;
  foundMovies!: Movie[];
  userIsSearching: boolean;

  constructor(private movieService: MovieService) {
    this.userIsSearching = false;
  }

  get menuState() {
    return this.userIsSearching ? "show" : "hide";
  }

  searchForMovie(): void {
    this.movieService.searchForMovie(this.searchTerm).subscribe(response => this.foundMovies = response.results);
    
    this.toggleSearch(true);
  }

  toggleSearch(flag: boolean): void {
    this.userIsSearching = flag;
  }

  delayToggleSearch(flag: boolean): void {
    setTimeout(() => {
      this.toggleSearch(flag);
    }, 200);
  }

  ngOnInit(): void {
  }

}
