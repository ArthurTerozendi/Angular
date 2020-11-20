import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './models/curso';
import { delay, filter, map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${ environment.API }cursos`  

  constructor(
    private httpClient : HttpClient
  ) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      delay(2000),
      //tap(console.log)
    );
  }

  post(curso) {
    return this.httpClient.post(this.API, curso).pipe(
      take(1)
    );
  }

  update(curso) {
    return this.httpClient.put(`${this.API}/${curso.id}`, curso).pipe(
      take(1)
    )
  }

  loadByID(id) {
    return this.httpClient.get(`${this.API}/${id}`).pipe(
      take(1)
    )
  }
}
