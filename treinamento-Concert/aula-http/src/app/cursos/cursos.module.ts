import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, CursosFormComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
