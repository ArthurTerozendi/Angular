import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Livro",
    rating: 4.7342,
    numPag: 200,
    preco: 50,
    dataLancamento: new Date(2020, 11, 12),
    url: 'http://www.google.com'
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Valor assíncrono')
    }, 2000);
  })

  valorAsync2 = interval(2000).pipe(
    map(valor => 'Valor assíncrono 2')
  );
  constructor() { }

  ngOnInit(): void {
  }

}
