import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AlertModalService } from '../shared/alert-modal.service';
import { CursosService } from './cursos.service';
import { Curso } from './models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  preserveWhitespaces: true,
})
export class CursosComponent implements OnInit {

  //curso: Curso[];
  cursos$: Observable<Curso[]>
  error$ = new Subject<boolean>();
  bsModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal 
  cursoSelecionado: Curso;
  constructor(
    private cursosService : CursosService,
    private bsModalService : BsModalService,
    private alertModalService : AlertModalService
  ) { }

  ngOnInit(): void {
    this.recarregar();
  }

  recarregar(){
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(
        error => {
          console.error(error);
          this.handleError('Erro ao carregar conteúdo. Tente novamente mais tarde.');
          //this.error$.next(true);
          return EMPTY;
        }
      )
    );
  }

  remover(curso) {
    this.cursoSelecionado = curso;
    this.bsModalRef = this.bsModalService.show(this.deleteModal);
    
    const result$ = this.alertModalService.showConfirm('Confirmação', 'Tem certeza que deseja deletar esse cadastro?')
    
    result$.asObservable().pipe(
      take(1),
      switchMap(
        result => result ? this.cursosService.remove(curso.id) : EMPTY
      )
    ).subscribe(
      success => this.recarregar(),
      error => this.handleError('Erro ao remover o curso'),
      () => this.bsModalRef.hide()
    );
  }
  
  handleError(msg){
    this.alertModalService.showAlertDanger(msg);
  }
}
