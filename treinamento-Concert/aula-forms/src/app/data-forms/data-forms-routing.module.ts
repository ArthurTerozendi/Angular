import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFormsComponent } from './data-forms.component';

const routes: Routes = [
  {path: '', component: DataFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataFormsRoutingModule { }
