import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url : string = 'www.google.com';
  urlImagem = 'http://lorempixel.com/400/200/animals/';
  gostouCurso : boolean = true;

  getNum(){
    return Math.random() * 10;
  }

  getTrue(){
    return true;
  }

}
