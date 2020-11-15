import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{path: 'login', loadChildren: () => import('src/app/login/login.component').then(m => LoginComponent)},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'alunos', loadChildren: () => import('src/app/alunos/alunos.module').then(m => AlunosModule), canActivate: [AuthGuard]},
  //canActivateChild: [AlunosGuard]},
  {path: 'cursos', loadChildren: () => import('src/app/cursos/cursos.module').then(m => CursosModule), canActivate: [AuthGuard],
  canActivateChild: [CursosGuard]},
  {path: '**', redirectTo : 'home', pathMatch : 'full'},
  {path: '', redirectTo : 'home', pathMatch : 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
