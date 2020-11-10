import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor : number = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  incrementar() {
    this.valor++;
    this.mudouValor.emit({novoValor : this.valor});
  }
  
  decrementar() {
    this.valor--;
    this.mudouValor.emit({novoValor : this.valor});
  }

  ngOnInit(): void {
  }

}
