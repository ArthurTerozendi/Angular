import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.sass']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeDoCurso : String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
