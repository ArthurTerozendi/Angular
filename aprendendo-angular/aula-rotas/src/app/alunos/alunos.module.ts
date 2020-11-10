import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guards';
import { AlunosDetalheResolve } from './guards/alunos-detalhe.resolve'



@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent, 
    AlunosDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers : [
    AlunosService,
    AlunosDeactivateGuard,
    AlunosDetalheResolve
  ]
})
export class AlunosModule { }
