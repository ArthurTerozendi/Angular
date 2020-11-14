import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  {path: '', component: AlunosComponent,
  canDeactivate: [AlunosDeactivateGuard],
  children: [
    {path: 'novo', component: AlunosFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: 'editar/:id', component: AlunosFormComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
