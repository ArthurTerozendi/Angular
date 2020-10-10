import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursoService : CursosService;
  cursos = [''];

  constructor() {
    this.cursoService = new CursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

}
