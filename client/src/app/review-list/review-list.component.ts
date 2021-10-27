import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input()
  movie_id! : string;

  @Input()
  reviews!: Review[];

  constructor() { }

  ngOnInit(): void {
  }

}
