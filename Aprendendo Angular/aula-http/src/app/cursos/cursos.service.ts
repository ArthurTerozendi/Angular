import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Cursos } from './cursos';
import { delay, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  

  private readonly API = `${environment.API}cursos`

  constructor(private http : HttpClient) { }

  list() {
    return this.http.get<Cursos[]>(this.API).pipe(
      delay(1500)
    );
  }

  carregarComId(id){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  create(form) {
    return this.http.post(this.API, form).pipe(take(1));
  }

  update(curso) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
