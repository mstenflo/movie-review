import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router : Router
  ) { }

  handleClick(): void {
    console.log({
      username: this.username,
      password: this.password
    });
    this.http.post("http://localhost:8001/api/users/login", {
      username: this.username,
      password: this.password,
    }, {
      observe: 'response',
    }).subscribe((response) => {
      console.log(response);
      this.router.navigate(["/"]);
    })
  }

  ngOnInit() : void {

  }
}