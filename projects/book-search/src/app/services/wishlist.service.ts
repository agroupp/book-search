import { Injectable } from '@angular/core';

const LS_KEY = '_e-sqr_bs_wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishList: string[] = [];
  constructor() { }

  getInitial(): void {
    try {
      this.wishList = !!localStorage.getItem(LS_KEY) ? JSON.parse(localStorage.getItem(LS_KEY) as string) : [];
    } catch {
      this.wishList = [];
    }
  }

  add(bookId: string): void {
    if (this.wishList.indexOf(bookId) > -1) {
      return;
    }
    this.wishList.push(bookId);
    this.save();
  }

  remove(bookId: string): void {
    if (this.wishList.indexOf(bookId) === -1) {
      return;
    }
    this.wishList = this.wishList.filter(id => id !== bookId);
    this.save();
  }

  isInList(bookId: string): boolean {
    return this.wishList.indexOf(bookId) > -1;
  }

  private save(): void {
    localStorage.setItem(LS_KEY, JSON.stringify(this.wishList));
  }
}
