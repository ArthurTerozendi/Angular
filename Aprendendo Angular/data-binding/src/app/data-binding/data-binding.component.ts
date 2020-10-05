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
  valorAtual : string;
  valorSalvo : string;
  mouseOver : boolean = false;
  nome = "abc";

  pessoa = {
    nome : "a",
    idade : 20
  }

  getNum() {
    return 3;
  }

  getTrue() {
    return true;
  }

  onKeyUp(evento : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  setValorSalvo(evento) {
    this.valorSalvo = evento;
  }

  mouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }

  clicar() {
    window.alert("Você clicou no botão")
  }

}
