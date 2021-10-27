import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile-page',
  templateUrl: './update-profile-page.component.html',
  styleUrls: ['./update-profile-page.component.css']
})
export class UpdateProfilePageComponent implements OnInit {

  user!: any;

  constructor(
    private http : HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  getUser(username : string) : void {
    this.http.get(`http://localhost:8001/api/users/username/${username}`).subscribe((data) => this.user = data)
  }

  handleClick() : void {
    this.http.patch(`http://localhost:8001/api/users/${this.user.id}`, {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      phone: this.user.phone
    }).subscribe(this.user);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let username = params.get("username");

      this.getUser(username!);
    });
  }

}
