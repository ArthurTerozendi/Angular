import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {

  url : String = "google.com";
  urlImage : String = "http://lorempixel.com/200/200/nature/"
  valorInput : String = "";
  valorSalvo : String = "";
  texto : String = "teste";
  nomeDoCurso : String = "Angular";
  constructor() { }

  ngOnInit(): void {
  }

  getTexto() {
    return "Um método foi chamado";
  }

  onClick(){
    alert("Botão foi clicado")
  }

  onKeyUp(evento){
    this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMudouValor(evento){
    console.log(evento)
  }

}
