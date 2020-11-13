import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos= [
    {id: 1, nome: 'aluno1'},
    {id: 2, nome: 'aluno2'},
    {id: 3, nome: 'aluno3'},
    {id: 4, nome: 'aluno4'}
  ]

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
