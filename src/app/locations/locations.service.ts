import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ILocation } from './location';

// Service
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  // hardcode: api/data.json
  private locationUrl = 'https://desaad.pythonanywhere.com/api/locations';

  // dependency injection
  constructor(private http: HttpClient) {}

  getLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(this.locationUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  addLocation(location: ILocation): Observable<ILocation> {
    return this.http
      .post<ILocation>(this.locationUrl, location)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // a client-side or network error occurred. Handle it accordingly
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful response code
      // the response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
