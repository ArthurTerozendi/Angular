import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos= [
    {id: 1, nome: 'Aluno1'},
    {id: 2, nome: 'Aluno2'},
    {id: 3, nome: 'Aluno3'},
    {id: 4, nome: 'Aluno4'},
    {id: 5, nome: 'Aluno5'},
    {id: 6, nome: 'Aluno6'},
    {id: 7, nome: 'Aluno7'},
    {id: 8, nome: 'Aluno8'}
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
