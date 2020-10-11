import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {

  id;
  inscricao : Subscription;
  aluno;

  constructor(
    private alunosService : AlunosService,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);
      }
    );*/
    this.inscricao = this.route.data.subscribe(
      info => {
        console.log(info)
        this.aluno = info.aluno;
      }
    );
  }

  editarContato(){
    console.log(this.aluno.id);
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
