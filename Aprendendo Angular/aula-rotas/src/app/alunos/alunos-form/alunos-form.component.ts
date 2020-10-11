import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivateGuard } from 'src/app/guards/iform-candeactivate.guard';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivateGuard {

  inscricao : Subscription;
  aluno;
  mudou : boolean = false;

  constructor(
    private alunosService : AlunosService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
        console.log(this.aluno);
        if (this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }
  inputMudou() {
    this.mudou = true;
  }
  podeMudarRota(){
    if (this.mudou){
      confirm("Você tem certeza que deseja mudar de pagina?");
    } 
    return true;
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  podeDesativar() {
    return this.podeMudarRota();
  }
}
