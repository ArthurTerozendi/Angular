import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers : [CursosService]
})
export class CursosComponent implements OnInit {

  cursoService : CursosService;
  cursos : string[];

  constructor(cursoService : CursosService) {
    //this.cursoService = new CursosService;
    this.cursoService = cursoService;
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();

    CursosService.criouCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
