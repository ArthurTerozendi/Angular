import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './models/curso';
import { delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crudService';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends CrudService<Curso>{

  constructor(
    protected httpClient : HttpClient
  ) {
    super(httpClient, `${ environment.API }cursos`)
   }
}
