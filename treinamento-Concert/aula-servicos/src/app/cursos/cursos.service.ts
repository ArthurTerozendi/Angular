import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  
  static criarNovoCurso = new EventEmitter<string>();

  private cursos : string[] = ['Angular', 'React', 'Java'];

  constructor(
    private logService : LogService
  ) {
    console.log("CursoService")
  }

  getCursos() {
    this.logService.consoleLog("Obtentdo lista de cursos");
    return this.cursos
  }
  addCurso(curso) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criarNovoCurso.emit(curso);
  }
}
