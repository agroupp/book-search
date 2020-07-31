import { Injectable } from '@angular/core';

const LS_KEY = '_e-sqr_bs_wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  // tslint:disable-next-line:variable-name
  private _wishList: string[] = [];
  get wishList(): string[] { return this._wishList; }

  constructor() { }

  getInitial(): void {
    try {
      this._wishList = !!localStorage.getItem(LS_KEY) ? JSON.parse(localStorage.getItem(LS_KEY) as string) : [];
    } catch {
      this._wishList = [];
    }
  }

  add(bookId: string): void {
    if (this._wishList.indexOf(bookId) > -1) {
      return;
    }
    this._wishList.push(bookId);
    this.save();
  }

  remove(bookId: string): void {
    if (this._wishList.indexOf(bookId) === -1) {
      return;
    }
    this._wishList = this._wishList.filter(id => id !== bookId);
    this.save();
  }

  isInList(bookId: string): boolean {
    return this._wishList.indexOf(bookId) > -1;
  }

  private save(): void {
    localStorage.setItem(LS_KEY, JSON.stringify(this._wishList));
  }
}
