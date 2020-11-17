import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDataRoutingModule } from './form-data-routing.module';
import { FormDataComponent } from './form-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FormDataComponent],
  imports: [
    CommonModule,
    FormDataRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FormDataModule { }
