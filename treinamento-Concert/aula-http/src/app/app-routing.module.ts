import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'cursos', loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule)},
  {path: 'rxjs', loadChildren: () => import('src/app/rxjs-poc/rxjs-poc.module').then(m => m.RxjsPocModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
