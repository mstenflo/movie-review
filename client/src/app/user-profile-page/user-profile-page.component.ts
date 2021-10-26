import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {

  user! : any;

  constructor(
    private http : HttpClient,
    private activatedRoute : ActivatedRoute
  ) { }

  getUser(username : string) : void {
    this.http.get(`http://localhost:8001/api/users/username/${username}`).subscribe((data) => this.user = data)
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let username = params.get("username");

      this.getUser(username!);
    });
  }

}
