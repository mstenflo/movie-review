import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import apiKey from '../assets/hidden/apikey'
import { LoggerService } from './logger.service';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private retrieveReviewsURI = apiKey.reviews_uri;

  constructor(
    private http: HttpClient,
    private logger: LoggerService  
  ) { }

  getReviewsByMovie(id: string) {
    this.logger.log("Retrieving reviews...");

    return this.http.get<Review[]>(this.retrieveReviewsURI).pipe(
      map(reviews => reviews.filter(review => {
        return review.imdbid === id;
      }))
    );
  }

  getRecentReviews() : Observable<any> {
    this.logger.log("Retrieving recent reviews...");

    return this.http.get<Review[]>("http://localhost:8001/api/reviews").pipe(
      map(reviews => {
        if (reviews.length > 5) {
          return reviews.splice(0, 5)
        } else {
          return reviews;
        }
      })
    );
  }
}
