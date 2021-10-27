import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Review } from '../review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  username!: string;

  @Input()
  canPostReview! : boolean;

  @Input()
  movie_id! : string;

  @Input()
  reviews!: Review[];

  constructor(
    private cookieService : CookieService
  ) { }

  ngOnInit(): void {
    this.username = this.cookieService.get("username");
    let userReviews : Review[] = this.reviews.filter((review) => review.reviewer.username === this.username);

    this.canPostReview = userReviews.length === 0 && this.username !== "";
  }

}
