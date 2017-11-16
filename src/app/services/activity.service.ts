import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ActivityService {

	private eventsUrl = 'http://localhost:4747/api/events';

  constructor(private http: HttpClient) { }



  saveActivity(activity: Activity, eventId: any): Observable<any> {
	const url = `${this.eventsUrl}/${eventId}/activities`;

    return this.http.post<Event>(url, activity, httpOptions).pipe(
      tap((e) => { console.log('added activity'); console.log(e); }),
      catchError((this.handleError<Event>('addActivity')))
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
      console.log('Activity Service: ' + message);
    }
}
