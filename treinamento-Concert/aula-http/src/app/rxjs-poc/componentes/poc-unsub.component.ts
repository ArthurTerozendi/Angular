import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  nome = 'Componente com unsubscribe';
  valor: string;

  sub: Subscription;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.sub = this.service.getValor().subscribe(
      novo => this.valor = novo
    )
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log(`${this.nome} foir destroido`)
  }

}