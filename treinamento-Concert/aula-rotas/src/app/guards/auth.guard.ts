import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
    
    if (!this.loginService.estadoLogin()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
    throw new Error('Method not implemented.');
  }
}
