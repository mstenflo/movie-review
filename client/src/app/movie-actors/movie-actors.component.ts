import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-actors',
  templateUrl: './movie-actors.component.html',
  styleUrls: ['./movie-actors.component.css']
})
export class MovieActorsComponent implements OnInit {

  @Input()
  movie! : Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
