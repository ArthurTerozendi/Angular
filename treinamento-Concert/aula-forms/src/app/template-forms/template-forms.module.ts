import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { TemplateFormsComponent } from './template-forms.component';

@NgModule({
  declarations: [TemplateFormsComponent],
  imports: [
    CommonModule,
    TemplateFormsRoutingModule,
    FormsModule,
  ]
})
export class TemplateFormsModule { }
