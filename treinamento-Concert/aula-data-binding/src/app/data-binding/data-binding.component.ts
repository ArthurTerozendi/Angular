import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {

  url : String = "google.com";
  urlImage : String = "http://lorempixel.com/200/200/nature/"
  constructor() { }

  ngOnInit(): void {
  }

  getTexto() {
    return "Um método foi chamado";
  }

}
