import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  alunos : Aluno[] = [
    {id: 1, nome: 'Aluno01', email: 'aluno01@gmail.com'},
    {id: 2, nome: 'Aluno02', email: 'aluno02@gmail.com'},
    {id: 3, nome: 'Aluno03', email: 'aluno03@gmail.com'},
    {id: 4, nome: 'Aluno04', email: 'aluno04@gmail.com'}
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id){
    for (let aluno of this.alunos) {
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
}
