import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
          this.handleError();
          //this.error$.next(true);
          return empty(error);
        }
      )
    );
  }

  handleError(){
    this.alertModalService.showAlertDanger('Erro ao carregar conteúdo. Tente novamente mais tarde.');
  }
}
