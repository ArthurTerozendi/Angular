import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTemplateRoutingModule } from './form-template-routing.module';
import { FormTemplateComponent } from './form-template.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormTemplateComponent
  ],
  imports: [
    CommonModule,
    FormTemplateRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FormTemplateModule { }
