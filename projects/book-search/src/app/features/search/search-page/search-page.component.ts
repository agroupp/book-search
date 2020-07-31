import { Observable, from, scheduled } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService, BooksApiService } from '@services';
import { Book } from '@data';
import { map, tap, mergeMap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookInfoDialogComponent } from '@dialogs';

const MAX_RESULTS = 20;

@Component({
  selector: 'sqr-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  userName = '';
  currentQuery = '';
  currentPage = 0;
  totalResults = 0;
  results$: Observable<Book[]> = from([]);
  loading = false;
  pageSize = MAX_RESULTS;
  pageSizeOptions = [10, 20, 30];
  showPaginator = false;

  constructor(private auth: AuthService, private api: BooksApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userName = this.auth.userName;
  }

  setCurrentQuery(query: string): void {
    this.currentQuery = query;
    this.currentPage = 0;
    this.search();
  }

  onPage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.search();
  }

  onItemClick(book: Book): void {
    this.dialog.open(BookInfoDialogComponent, {
      data: {book}
    });
  }

  search(): void {
    this.loading = true;
    this.results$ = this.api.search(this.currentQuery, this.currentPage * this.pageSize, this.pageSize).pipe(
      tap(resp => this.totalResults = resp.totalItems),
      map(resp => resp.items),
      tap(() => this.loading = false),
      tap(() => this.showPaginator = true)
    );
  }
}
