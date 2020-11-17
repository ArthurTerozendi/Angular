import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estados } from './models/estados.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getEstados(){
    return this.httpClient.get<Estados[]>('assets/dados/estados.json');
  }
}
