import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{
    
    emitirCursoCriado = new EventEmitter;
    static criouCurso = new EventEmitter;

    cursos : string[] = ['Angular', "JAVA", "JavaScript", "HTML", "CSS"]; 
    constructor (private logService : LogService) {
        console.log('Curso Service');
    }

    getCursos(){
        this.logService.consoleLog("Lista de Cursos")
        return this.cursos;
    }

    addCurso(curso : string) {
        this.logService.consoleLog(`Curso criado : ${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouCurso.emit(curso);
    }
}