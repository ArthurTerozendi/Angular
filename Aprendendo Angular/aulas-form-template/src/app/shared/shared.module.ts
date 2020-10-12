import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { ConsultaCepService } from './services/consulta-cep.service';



@NgModule({
  declarations: [
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DropdownService,
    ConsultaCepService
  ],
  exports: [
    FormDebugComponent
  ]
})
export class SharedModule { }
