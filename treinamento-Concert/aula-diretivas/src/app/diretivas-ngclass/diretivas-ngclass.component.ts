import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngclass',
  templateUrl: './diretivas-ngclass.component.html',
  styleUrls: ['./diretivas-ngclass.component.scss']
})
export class DiretivasNgclassComponent implements OnInit {

  meuFavorito = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}
