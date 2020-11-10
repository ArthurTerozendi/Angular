import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cursos } from '../cursos';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces : true
})
export class CursosListaComponent implements OnInit {

  //curso : Cursos[];
  @ViewChild('deletarModal') deletarModal;
  cursos$ : Observable<Cursos[]>;
  deleteModelRef : BsModalRef;
  cursoSelecionado : Cursos;

  constructor(
      private cursosService : CursosService,
      private router : Router,
      private route : ActivatedRoute,
      private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.list();
  }

  onRefresh() {
    this.cursos$ = this.cursosService.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        return empty;
      })
    ); 
  }

  onEdit(id) {
    this.router.navigate(['../editar', id], { relativeTo: this.route });
  }
  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModelRef = this.modalService.show(this.deletarModal, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.cursosService.remove(this.cursoSelecionado.id).subscribe(
      success => {
        this.onRefresh();
        this.deleteModelRef.hide();
      },
      error => {
        this.deleteModelRef.hide();
      }
    );
    this.deleteModelRef.hide();
  }
 
  decline(): void {
    this.deleteModelRef.hide();
  }
  
}
