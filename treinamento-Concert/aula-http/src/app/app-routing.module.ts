import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'cursos', loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule)},
  {path: 'rxjs', loadChildren: () => import('src/app/rxjs-poc/rxjs-poc.module').then(m => m.RxjsPocModule)},
  {path: 'upload', loadChildren: () => import('src/app/upload-file/upload-file.module').then(m => m.UploadFileModule)},
  {path: 'search', loadChildren: () => import('src/app/reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo : 'home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
