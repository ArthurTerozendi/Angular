import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {
  @Input('nome') nomeCurso : string;
  constructor() { }

  ngOnInit(): void {
  }

}
