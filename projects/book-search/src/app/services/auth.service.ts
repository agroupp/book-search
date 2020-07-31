import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

const LS_KEY = '_e-sqr_bs_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private _userName!: string;
  private isSignedInSubject = new BehaviorSubject<boolean>(false);
  get userName(): string { return this._userName; }
  get isSignedIn(): boolean { return !!this.userName; }
  get isSignedIn$(): Observable<boolean> {return this.isSignedInSubject.asObservable(); }

  constructor(private router: Router) { }

  setUserName(value: string): void {
    this._userName = value;
    this.isSignedInSubject.next(true);
    localStorage.setItem(LS_KEY, value);
  }

  signOut(): void {
    this._userName = '';
    localStorage.removeItem(LS_KEY);
    this.isSignedInSubject.next(false);
    this.router.navigate(['sign-in']);
  }

  getUserName(): string {
    const userName = localStorage.getItem(LS_KEY) as string;
    if (userName) {
      this.setUserName(userName);
    }
    return userName;
  }
}
