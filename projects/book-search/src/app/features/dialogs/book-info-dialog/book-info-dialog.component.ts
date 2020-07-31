import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '@data';
import { WishlistService } from '@services';

@Component({
  selector: 'sqr-book-info-dialog',
  templateUrl: './book-info-dialog.component.html',
  styleUrls: ['./book-info-dialog.component.scss']
})
export class BookInfoDialogComponent implements OnInit {

  book!: Book;
  isInWishList = false;

  constructor(
    private wishListService: WishlistService,
    @Inject(MAT_DIALOG_DATA) private data: {book: Book}
  ) {}

  ngOnInit(): void {
    this.book = this.data.book;
    this.isInWishList = this.wishListService.isInList(this.book.id);
  }

  toggleList(): void {
    if (this.isInWishList) {
      this.wishListService.remove(this.book.id);
      this.isInWishList = false;
    } else {
      this.wishListService.add(this.book.id);
      this.isInWishList = true;
    }
  }
}
