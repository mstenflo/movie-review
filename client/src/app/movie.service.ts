import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import api from "../assets/hidden/apikey"
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Movie } from './movie';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = api.top_movies_url;
  private searchMoviesUrl = api.search_movies_url;
  private specificMovieUrl = api.specific_movie_url;

  constructor(
    private http : HttpClient,
    private logger : LoggerService
  ) { }

  retrieveMovieById(id: string): Observable<Movie> {
    return this.http.get<any>(this.specificMovieUrl + id).pipe(
      tap((_) => {
        this.logger.log("Retrieving movie #" + id);
        this.logger.log(_);
      })
    ); 
  }

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
