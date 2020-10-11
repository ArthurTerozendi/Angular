import { EventEmitter, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable()
export class LoginService {

  private usuarioLogado : boolean = false;
  mostrarMenuEmmiter = new EventEmitter<boolean>();
  constructor(private router : Router) { }

  fazerLogin(usuario : Usuario) {
    if (usuario.nome === "login" && usuario.senha === "senha") {
      this.usuarioLogado = true;
      this.mostrarMenuEmmiter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioLogado = false;
      this.mostrarMenuEmmiter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioLogado;
  }
}
