import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

  canActivate (
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ) : Observable<boolean> | boolean{
    return this.verificarAcesso();
  }
  private verificarAcesso(){
    if (this.loginService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;  
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      return this.verificarAcesso();
    }
}
