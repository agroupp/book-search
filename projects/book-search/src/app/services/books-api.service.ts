import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchApiResponse } from '@data';

const BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private http: HttpClient) { }

  search(query: string, start = 0, results = 20): Observable<SearchApiResponse> {
    const params = new HttpParams()
      .set('startIndex', start.toString())
      .set('maxResults', results.toString())
      .set('q', encodeURIComponent(query));
    return this.http.get<SearchApiResponse>(BOOKS_API, {params});
  }
}
