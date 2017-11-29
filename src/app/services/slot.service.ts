import { Injectable } from '@angular/core';
import { Slot } from '../models/Slot';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SlotService {

	private eventsUrl = '/api/events';

	constructor(private http: HttpClient) { }

	getAll(eventId: any, activityId: any): Observable<Slot[]> {
		const url = `${this.eventsUrl}/${eventId}/activities/${activityId}/slots`;

		return this.http.get<Slot[]>(url, httpOptions)
					.pipe(
						tap(heroes => this.log(`fetched slots`)),
						catchError(this.handleError('getSlots', []))
					);
	}

	updateSlot(eventId: any, activityId: any, slotId: any, slot: Slot): Observable<any> {
		const url = `${this.eventsUrl}/${eventId}/activities/${activityId}/slots/${slotId}`;

		return this.http.put<Slot>(url, slot, httpOptions).pipe(
		  tap((e) => { console.log('updated slot'); console.log(e); }),
		  catchError((this.handleError<Slot>('updateSlot')))
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
