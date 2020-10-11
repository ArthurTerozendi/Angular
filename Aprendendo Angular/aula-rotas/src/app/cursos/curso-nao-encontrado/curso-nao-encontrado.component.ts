import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  id : string;
  inscricao : Subscription;
  curso;
  constructor(private route : ActivatedRoute){
    //console.log(this.route);
    //this.id =  this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao =this.route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
