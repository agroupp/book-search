import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isSignedIn) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
}
