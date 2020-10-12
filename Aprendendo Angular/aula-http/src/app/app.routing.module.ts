import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CursosModule} from './cursos/cursos.module';

const routes: Routes = [
  {path: 'cursos', loadChildren: () => import("src/app/cursos/cursos.module").then(m => CursosModule)},
  {path: '', redirectTo: 'cursos/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
