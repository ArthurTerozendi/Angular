import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {
  
  id: number;
  nome: string;
  inscricao: Subscription;
  constructor(
    private activatedRoute : ActivatedRoute,
    private alunosService : AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
        this.nome = this.alunosService.getAluno(this.id).nome;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
