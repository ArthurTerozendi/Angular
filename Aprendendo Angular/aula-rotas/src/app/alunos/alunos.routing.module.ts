import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guards';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheResolve } from './guards/alunos-detalhe.resolve';
const alunosRoutes = [
    {path: '', component : AlunosComponent, children : [
        {path : 'novo', component : AlunosFormComponent, canDeactivate : [AlunosDeactivateGuard]},
        {path : ':id', component : AlunosDetalheComponent, resolve: { aluno: AlunosDetalheResolve}},
        {path : ':id/edit', component : AlunosFormComponent, canDeactivate : [AlunosDeactivateGuard]}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule{}