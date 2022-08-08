import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './models/hero.model';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  log(msg:string){
      console.log(msg);
  }
  
  
  constructor(private http:HttpClient) { }
  urlBase = 'https://akabab.github.io/superhero-api/api/';
  getHeroes(): Observable<Hero[]> {

     return this.http.get<Hero[]>(this.urlBase+'all.json').pipe(
      tap(_ => this.log(`fetched heroes`)),
      catchError(this.handleError<Hero[]>(`getHeroes`))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
      
    }
  

}
