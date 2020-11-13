import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pag : number;
  inscricao: Subscription;

  constructor(
    private cursosService : CursosService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.activatedRoute.queryParams.subscribe(
      queryParams => {
        this.pag = queryParams['pagina'];
      }
    );
  }

  proxPag(){
    this.router.navigate(
      ['/cursos'],
      {queryParams: {'pagina': ++this.pag}}
      );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
