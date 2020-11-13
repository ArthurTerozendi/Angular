import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  {path: 'alunos', component: AlunosComponent, children: [
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunosFormComponent},
    {path: 'novo', component: AlunosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
