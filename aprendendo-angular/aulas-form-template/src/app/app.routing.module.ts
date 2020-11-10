import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDataModule } from './form-data/form-data.module';
import { FormTemplateModule } from './form-template/form-template.module';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  {path : 'formTemplate', loadChildren : () => import('src/app/form-template/form-template.module').then(m => FormTemplateModule)},
  {path : 'formData', loadChildren : () => import('src/app/form-data/form-data.module').then(m => FormDataModule)},
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'formData' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
