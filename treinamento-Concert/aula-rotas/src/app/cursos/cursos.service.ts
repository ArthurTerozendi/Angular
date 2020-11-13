import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: "Angular"},
      {id: 2, nome: "Java"},
      {id: 3, nome: "JavaScript"},
      {id: 4, nome: "React"},
      {id: 5, nome: "Angular"},
    ]
  }
  getCurso(id: number){
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if(id == curso.id){
        return curso;
      }
    }
    return null; 
  }
}
