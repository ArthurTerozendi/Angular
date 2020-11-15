import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormsRoutingModule } from './data-forms-routing.module';
import { DataFormsComponent } from './data-forms.component';


@NgModule({
  declarations: [DataFormsComponent],
  imports: [
    CommonModule,
    DataFormsRoutingModule
  ]
})
export class DataFormsModule { }
