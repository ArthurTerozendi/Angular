import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'aula-data-binding';
  valor =  5;
  destruir = false;

  mudarValor(){
    this.valor++;
  }

  deletarCiclo(){
    this.destruir = true;
  }
}
