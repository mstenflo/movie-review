import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(
    private http : HttpClient,
    private router : Router,
    private cookieService : CookieService
  ) { }

  handleClick(): void {
    let data = {
      username: this.username,
      password: this.password
    }
    console.log({
      username: this.username,
      password: this.password
    });
    fetch("http://localhost:8001/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((resData) => {
      if (resData) {
        this.cookieService.set("username", data.username);
        this.router.navigate(["/"]);
      } else {

      }
    });
  }

  ngOnInit() : void {

  }
}