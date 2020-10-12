import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'lista', component: CursosListaComponent},
  {path: 'novo', component: CursosFormComponent},
  {path: 'editar/:id', component: CursosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
