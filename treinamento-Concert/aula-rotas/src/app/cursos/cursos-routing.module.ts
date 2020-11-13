import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: '', component: CursosComponent, children: [
    {path: ':id', component: CursoDetalheComponent},
    {path: 'naoEncontrada', component: PaginaNaoEncontradaComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
