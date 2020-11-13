import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  idCurso: number;
  inscricao: Subscription;
  curso;
  
  constructor(
    private activatedRoute : ActivatedRoute,
    private cursosService : CursosService,
    private router : Router
    ) {
    
  }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe(
      params => {
        this.idCurso = params['id'];
        this.curso = this.cursosService.getCurso(this.idCurso);
      
        if (this.curso == null){
          this.router.navigate(['./naoEncontrada']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
