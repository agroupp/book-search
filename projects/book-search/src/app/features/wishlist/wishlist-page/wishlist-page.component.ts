import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, BooksApiService, WishlistService } from '@services';
import { Book } from '@data';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sqr-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit, OnDestroy {
  userName = '';
  loading = true;
  books!: Book[];
  booksSubscription!: Subscription;

  constructor(private auth: AuthService, private api: BooksApiService, private wishListService: WishlistService) { }

  ngOnInit(): void {
    this.userName = this.auth.userName;
    this.init();
  }

  remove(book: Book): void {
    this.wishListService.remove(book.id);
    this.books = this.books.filter(b => b.id !== book.id);
  }

  private init(): void {
    this.booksSubscription = this.api.getList(this.wishListService.wishList).pipe(
      tap(books => {
        this.loading = false;
        this.books = books;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }
}
