import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'sqr-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isSignedIn$!: Observable<boolean>;
  userName = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isSignedIn$ = this.auth.isSignedIn$.pipe(
      delay(0),
      tap(() => this.userName = this.auth.userName)
    );
  }

  signOut(): void {
    this.auth.signOut();
  }

  private redirectToSignIn(isSignedIn: boolean): void {
    if (!isSignedIn) {
      this.router.navigate(['sign-in']);
    }
  }
}
