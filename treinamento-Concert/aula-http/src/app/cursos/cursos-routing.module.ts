import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoResolveGuard } from '../guards/curso-resolve.guard';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'novo', component: CursosFormComponent, resolve: {
    curso: CursoResolveGuard
  }},
  {path: 'editar/:id', component: CursosFormComponent, resolve: {
    curso: CursoResolveGuard
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
