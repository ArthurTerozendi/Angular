import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logado: boolean = false;

  constructor(
    private router : Router
  ) { }

  logar(usuario){
    if(usuario.login == "123" && usuario.senha == "123") {
      
      console.log(usuario.login)
      this.router.navigate(['../']);
      this.logado = true;
      
    } else {
      this.logado = false;
    }
  }
  
  estadoLogin(){
    return !this.logado;
  }
}
