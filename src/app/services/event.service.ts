import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Event } from '../models/Event';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {

  private eventsUrl = 'http://localhost:4747/api/events';

  constructor(private http: HttpClient) { }

  saveEvent(event: Event): Observable<any> {
    return this.http.post<Event>(this.eventsUrl, event, httpOptions).pipe(
      tap((e) => { console.log('added event'); console.log(e); }),
      catchError((this.handleError<Event>('addEvent')))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log('Event Service: ' + message);
    }

}
