import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  salvar() {
    console.log("salvo");
  }

  cancelar() {
    console.log("cancelar")
  }

}
