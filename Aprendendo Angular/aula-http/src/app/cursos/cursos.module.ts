import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from './cursos.service';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [CursosListaComponent, CursosFormComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers : [CursosService]
})
export class CursosModule { }
