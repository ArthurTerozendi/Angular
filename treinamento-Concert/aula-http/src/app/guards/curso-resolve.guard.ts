import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';
import { Curso } from '../cursos/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoResolveGuard implements Resolve<Curso> {


  constructor(private cursosService: CursosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {

    if (route.params && route.params['id']) {
      return this.cursosService.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null
    })
  }
}
