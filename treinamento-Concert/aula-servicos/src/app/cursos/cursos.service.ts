import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  
  static criarNovoCurso = new EventEmitter<string>();

  private cursos : string[] = ['Angular', 'React', 'Java'];

  constructor() {
    console.log("CursoService")
  }

  getCursos() {
    return this.cursos
  }
  addCurso(curso) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criarNovoCurso.emit(curso);
  }
}
