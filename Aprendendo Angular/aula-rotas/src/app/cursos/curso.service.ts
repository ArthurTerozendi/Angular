 import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  todosCursos = [
    {id : 1, nome : 'Angular'},
    {id : 2, nome : "JAVA"},
    {id : 3, nome : "HTML"}
  ]
  constructor() { }

  getCursos() {
    return this.todosCursos;
  }

  getCurso(id) {
    for (let curso of this.todosCursos) {
      if(curso.id == id) {
        return curso;
      }
  } 
    return null;
  } 
}
