import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import api from "../assets/hidden/apikey"
import { Movie } from './movie';
import { Response } from './Response';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = api.url;

  constructor(
    private http : HttpClient 
  ) { }

  getMovies(): Observable<Response> {
    return this.http.get<Response>(this.moviesUrl).pipe(
      tap((_) => {
        console.log("It got here?");
      })
    ); 
  }

}
