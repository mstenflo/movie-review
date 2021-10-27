import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username!: string;
  password!: string;
  firstname!: string;
  lastname!: string;
  email! : string;
  phone! : string;
  user! : any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  handleClick() : void {
    console.log("YOU'RE HERE!");
    this.http.post("http://localhost:8001/api/users", {
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone
    }).subscribe(data => this.user = data);

    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
