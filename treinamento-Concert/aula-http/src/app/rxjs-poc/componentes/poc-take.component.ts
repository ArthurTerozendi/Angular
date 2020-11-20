import { Component, OnDestroy, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap, take } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-info">
    </app-poc-base>
  `
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome = 'Componente com take';
  valor: string;

  unsub$ = new Subject();

  constructor(private service: EnviarValorService) {}
  ngOnInit() {
    this.service.getValor()
    .pipe(
      take(1)
    )
    .subscribe(
      novo => this.valor = novo
    )
  }
  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log(`${this.nome} foir destroido`)
  }
}