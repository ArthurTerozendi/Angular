import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosService } from './cursos.service';
import { Curso } from './models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  preserveWhitespaces: true,
})
export class CursosComponent implements OnInit {

  //curso: Curso[];
  cursos$: Observable<Curso[]>

  constructor(
    private cursosService : CursosService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.list();
  }

}
