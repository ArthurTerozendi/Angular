import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizada',
  templateUrl: './diretiva-customizada.component.html',
  styleUrls: ['./diretiva-customizada.component.scss']
})
export class DiretivaCustomizadaComponent implements OnInit {

  mostrarCursos = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
