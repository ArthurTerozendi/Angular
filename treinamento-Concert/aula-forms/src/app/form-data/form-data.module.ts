import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDataRoutingModule } from './form-data-routing.module';
import { FormDataComponent } from './form-data.component';


@NgModule({
  declarations: [FormDataComponent],
  imports: [
    CommonModule,
    FormDataRoutingModule
  ]
})
export class FormDataModule { }
