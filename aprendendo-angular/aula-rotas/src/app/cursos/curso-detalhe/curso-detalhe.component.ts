import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id : string;
  inscricao : Subscription;
  curso;
  constructor(private route : ActivatedRoute,
              private cursoService : CursoService,
              private router : Router) { 
    //console.log(this.route);
    //this.id =  this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao =this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.curso = this.cursoService.getCurso(this.id);
        if(this.curso == null){
          this.router.navigate(['/cursos/naoEncotrado', this.id]);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
