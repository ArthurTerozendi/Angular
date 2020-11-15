import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos-routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [
    CursosComponent,
    PaginaNaoEncontradaComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
