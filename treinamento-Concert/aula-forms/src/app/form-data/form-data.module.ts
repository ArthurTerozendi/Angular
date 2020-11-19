import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDataRoutingModule } from './form-data-routing.module';
import { FormDataComponent } from './form-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FormDataComponent],
  imports: [
    CommonModule,
    FormDataRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class FormDataModule { }
