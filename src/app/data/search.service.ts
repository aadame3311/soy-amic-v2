import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SearchForm } from './search-form';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }
  postSearchForm(searchForm : SearchForm) : Observable<any> {
    return this.http.post('https://putsreq.com/QawareMt73QDUvCnuFcp', searchForm).pipe(
      tap(data => console.log(data))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    // in a real world app, we may send error to logging infrastructure
    if (err.error instanceof ErrorEvent) {
        // client side error occurred, handle appropriately
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // backend returned unsuccessful response code
        // response body may contains clues as to what happened
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
