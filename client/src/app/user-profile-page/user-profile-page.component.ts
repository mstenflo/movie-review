import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  user! : any;
  userReviews! : any;

  constructor(
    private http : HttpClient,
    private activatedRoute : ActivatedRoute
  ) { }

  getUser(username : string) : void {
    this.http.get(`http://localhost:8001/api/users/username/${username}`).subscribe((data) => {
      this.user = data;
      
      this.getUserReviews(this.user.id);
    })
  }

  getUserReviews(id : string) : void {
      console.log("test");
      this.http.get(`http://localhost:8001/api/reviews/reviewer/${id}`)
        .subscribe((data) => {
          console.log(data);
          this.userReviews = data;
        })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let username = params.get("username");

      this.getUser(username!);
    });
  }

}
