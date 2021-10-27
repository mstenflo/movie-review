import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-create-review-form',
  templateUrl: './create-review-form.component.html',
  styleUrls: ['./create-review-form.component.css']
})
export class CreateReviewFormComponent implements OnInit {

  username!: string;
  subject!: string;
  body!: string;

  @Input()
  movie_id!: string;

  constructor(
    private http : HttpClient,
    private logger : LoggerService,
    private cookieService : CookieService
  ) { }

  handleClick() : void {
    let user : any;
    this.username = this.cookieService.get("username");

    this.http.get(`http://localhost:8001/api/users/username/${this.username}`)
      .subscribe(data => {
        user = data;

        this.logger.log({
          subject: this.subject,
          body: this.body,
          imdbid: this.movie_id,
          reviewer: {
            id: user.id
          }
        });

        this.http.post(`http://localhost:8001/api/reviews`, {
          subject: this.subject,
          body: this.body,
          imdbid: this.movie_id,
          reviewer: {
            id: user.id
          }
        }).subscribe(data => this.logger.log(data));
      });
  }

  ngOnInit(): void {
  }

}
