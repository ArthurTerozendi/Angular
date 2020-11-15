import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { TemplateFormsComponent } from './template-forms.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TemplateFormsComponent],
  imports: [
    CommonModule,
    TemplateFormsRoutingModule,
    FormsModule
  ]
})
export class TemplateFormsModule { }
