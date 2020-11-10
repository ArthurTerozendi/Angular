import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos;
  pagina : number;
  inscricao : Subscription;
  constructor(
    private cursoService : CursoService, 
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      queryParams => this.pagina = queryParams['pagina']
      );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPag(){
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }
  
  anteriorPag() {
    if(this.pagina > 1){
      this.router.navigate(["/curso"], {queryParams: {'pagina':--this.pagina}});
    }
  }

}
