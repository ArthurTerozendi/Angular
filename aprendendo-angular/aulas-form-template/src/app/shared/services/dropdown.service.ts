import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estados } from '../models/estados.model';

@Injectable()
export class DropdownService {

  constructor(
    private http : HttpClient
    ) { }

  getEstados() {
    return this.http.get<Estados[]>('/assets/dados/estados.json');
  }

  getTecnologias(){
    return [
      {nome: 'java', desc:'Java'},
      {nome: 'javaScript', desc:'JavaScript'},
      {nome: 'angular', desc:'Angular'},
      {nome: 'php', desc:'PHP'}
    ]
  }

  getNewsletter() {
    return [
      {nome: 's', desc: 'Sim'},
      {nome: 'n', desc: 'Não'}
    ]
  }
}
