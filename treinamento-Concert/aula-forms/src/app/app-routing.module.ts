import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDataModule } from './form-data/form-data.module';
import { FormTemplateModule } from './form-template/form-template.module';

const routes: Routes = [
  {path: 'templateForm', loadChildren: () => import('src/app/form-template/form-template.module').then(m => FormTemplateModule)},
  {path: 'dataForm', loadChildren: () => import('src/app/form-data/form-data.module').then(m => FormDataModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
