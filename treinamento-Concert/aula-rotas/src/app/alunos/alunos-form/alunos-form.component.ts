import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit {
  id: number;
  inscricao: Subscription = null;
  formMudou: boolean = false;
  nome: string = "";
  constructor(
    private alunosService : AlunosService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id){
      this.inscricao = this.activatedRoute.params.subscribe(
        params => {
          this.id = params['id'];

          this.nome = this.alunosService.getAluno(this.id).nome;
        }
      );
    }
  }
  ngOnDestroy() {
    if (this.inscricao != null)
      this.inscricao.unsubscribe();
  }

  salvar() {
    console.log("salvo");
  }

  cancelar() {
    console.log("cancelar")
  }

  onInput() {
    this.formMudou = true;
  }

}
