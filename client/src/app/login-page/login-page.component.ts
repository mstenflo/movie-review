import { Component, Input, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @Input() username! : string;
  @Input() password! : string;

  constructor(
    private http : HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.http.post("/api/users", {
      username: this.username,
      password: this.password
    });
    // e.preventDefault();
    // const username = registerForm.username.value;
    // const password = registerForm.password.value;
    // let accountType;
    // if (username === "employee" && password === "employees") {
    //   accountType = true;
    //   alert("You have successfully registered as an employee.");
    //   location.reload();
    // } else if (username === "manager" && password === "managers") {
    //   accountType = false;
    //   alert("You have successfully registered as a manager.");
    //   location.reload();
    // }
    // else {
    //   loginErrorMsg.style.opacity = 1;
    // }
  }
}

