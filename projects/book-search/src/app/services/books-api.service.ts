import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchApiResponse, Book } from '@data';
import { concatMap, toArray } from 'rxjs/operators';

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

  get(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${BOOKS_API}/${bookId}`);
  }

  // This is not the best solution but until we don't have any backend
  // to host wishlist, I believe it's good enough.
  // By the way it's pretty quick.
  getList(ids: string[]): Observable<Book[]> {
    return from(ids).pipe(
      concatMap(id => this.get(id)),
      toArray()
    );
  }
}
