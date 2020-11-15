import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFormsModule } from './data-forms/data-forms.module';
import { TemplateFormsModule } from './template-forms/template-forms.module';

const routes: Routes = [
  {path: 'templateForm', loadChildren: () => import('src/app/template-forms/template-forms.module').then(m => TemplateFormsModule)},
  {path: 'dataForm', loadChildren: () => import('src/app/data-forms/data-forms.module').then(m => DataFormsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
