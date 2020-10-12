import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css'],
  preserveWhitespaces: true
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    /*this.route.params.subscribe(
      params => {
        const id = params.id;
        const curso$ = this.cursosService.carregarComId(id);
        curso$.subscribe(curso => {
          this.atualizarForm(curso);
        })
      }
    );*/

    this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.cursosService.carregarComId(id))
    ).subscribe(curso => this.atualizarForm(curso));

    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      desc: [null, [Validators.required]]
    });
  }


  atualizarForm(curso) {
    this.formulario.patchValue({
      id: curso.id,
      nome: curso.nome,
      desc: curso.desc
    });
  }

  hasError(campo: string) {
    return this.formulario.get(campo).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      if (!this.formulario.value.id) {
        this.cursosService.create(this.formulario.value).subscribe(
          sucesso => {
            console.log('sucesso');
            this.router.navigate(['/cursos/lista']);
          },
          error => console.error(error),
          () => console.log('Request ok')
        );
      } else {
        this.cursosService.update(this.formulario.value).subscribe(
          sucesso => {
            console.log('sucesso');
            this.router.navigate(['/cursos/lista']);
          },
          error => console.error(error),
          () => console.log('upadate ok')
        );
      }
    }
  }

  onCancel() {
    this.submitted = false;
    if (!this.formulario.value.id) {
      this.formulario.reset();
    } else {
      this.router.navigate(['../cursos/lista']);
    }
  }

}
