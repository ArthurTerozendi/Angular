import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormDataRoutingModule } from './form-data.routing.module';
import { FormDataComponent } from './form-data.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormDataComponent,
  ],
  imports: [
    CommonModule,
    FormDataRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class FormDataModule { }
