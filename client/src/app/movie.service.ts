import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import api from "../assets/hidden/apikey"
import { Response } from './Response';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = api.top_movies_url;
  private searchMoviesUrl = api.search_movies_url;

  constructor(
    private http : HttpClient,
    private logger : LoggerService
  ) { }

  getMovies(): Observable<any> {
    return this.http.get<Response>(this.moviesUrl).pipe(
      tap((_) => {
        this.logger.log("Listing Top Movies...");
      })
    ); 
  }

  searchForMovie(movie: string): Observable<any> {  
    console.log(this.searchMoviesUrl + movie)  
    return this.http.get<Response>(this.searchMoviesUrl + movie).pipe(
      tap((_) => {
        this.logger.log("Searching movies for " + movie + "...");
      })
    ); 
  }

}
