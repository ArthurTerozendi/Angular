import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-operador-elvis',
  templateUrl: './diretiva-operador-elvis.component.html',
  styleUrls: ['./diretiva-operador-elvis.component.scss']
})
export class DiretivaOperadorElvisComponent implements OnInit {

  tarefa = {
    desc: 'Descrição de tarefa',
    responsavel: {nome: null}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
