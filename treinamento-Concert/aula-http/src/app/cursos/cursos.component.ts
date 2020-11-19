import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  preserveWhitespaces: true,
})
export class CursosComponent implements OnInit {

  curso: Curso[];

  constructor(
    private cursosService : CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.list().subscribe(
      dados => this.curso = dados
    );
  }

}
