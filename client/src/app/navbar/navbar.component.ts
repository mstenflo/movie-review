import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username! : string;
  isAuthenticated! : boolean;

  constructor(
    private cookieService : CookieService,
    private router : Router
  ) {
  }

  logOutUser(): void {
    this.cookieService.delete("username");
    window.location.href = "/";
  }

  ngOnInit(): void {
    this.username = this.cookieService.get("username");

    this.isAuthenticated = this.username !== "";
  }


}
