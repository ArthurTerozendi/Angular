import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  idCurso: string;
  
  constructor(private activatedRoute : ActivatedRoute) {
    this.idCurso = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
