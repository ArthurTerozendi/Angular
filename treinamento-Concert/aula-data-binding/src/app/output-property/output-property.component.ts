import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.sass']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valorInput : number = 0;

  @Output() mudouValor = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  menos() {
    this.valorInput--;
    this.mudouValor.emit({novoValor : this.valorInput})
  }

  mais(){
    this.valorInput++;
    this.mudouValor.emit({novoValor : this.valorInput})
  }

}
