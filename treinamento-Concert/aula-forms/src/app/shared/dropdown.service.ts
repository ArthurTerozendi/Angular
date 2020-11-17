import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Cidades } from './models/cidades.model';
import { Estados } from './models/estados.model';
import { Paises } from './models/paises.model';

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

  getPaises() {
    return this.httpClient.get<Paises[]>('assets/dados/paises.json');
  }

  getCidades(estadoID : string) {
    return this.httpClient.get<Cidades[]>('assets/dados/cidades.json').pipe(
      map((cidade : Cidades[]) => cidade.filter( c => c.estado == estadoID))
    );
  }

  getEstadoID(siglaEstado) {
    return this.httpClient.get<Estados[]>('assets/dados/estados.json').pipe(
      map((estado : Estados[]) => estado.filter( e => e.sigla === siglaEstado))
    )
  }
}
