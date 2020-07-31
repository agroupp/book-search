import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@data';

@Component({
  selector: 'sqr-wishlist-page-item',
  templateUrl: './wishlist-page-item.component.html',
  styleUrls: ['./wishlist-page-item.component.scss']
})
export class WishlistPageItemComponent implements OnInit {
  @Input() book!: Book;
  @Output() remove = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    this.remove.emit();
  }
}
