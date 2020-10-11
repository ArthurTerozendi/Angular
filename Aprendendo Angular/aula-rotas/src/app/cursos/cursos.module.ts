import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.modute';
import { CursoService } from './curso.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
      CommonModule,
      CursosRoutingModule
  ],
  exports: [],
  declarations: [
      CursoDetalheComponent,
      CursoNaoEncontradoComponent,
      CursosComponent
  ],
  providers: [CursoService]
})
export class CursosModule {}