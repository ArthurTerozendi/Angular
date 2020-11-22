import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true,
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private router: Router,
    private alertModalService: AlertModalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*console.log(this.activatedRoute.snapshot);
    if (!(this.activatedRoute.snapshot.url[0].path == 'novo')) {
      let id = this.activatedRoute.snapshot.params.id;
      const cursos$ = this.cursosService.loadByID(id);
      cursos$.subscribe(curso => { this.preencherCampo(curso) })
    }*/
    const curso = this.activatedRoute.snapshot.data['curso'];
    this.form = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required]]
    })
  }

  onSubmit() {


    let msgSuccess = "Curso salvo com sucesso"
    let msgError = "Erro ao salvar o curso"

    if (this.form.value.id) {
      msgSuccess = "Editado com sucesso"
      msgError = "Erro ao salvar a edição do curso"
    }
    if (this.form.valid){
      this.cursosService.save(this.form.value).subscribe(
        sucess => this.alertModalService.showAlertSuccess(msgSuccess),
        error => this.alertModalService.showAlertDanger(msgError),
        () => this.router.navigate(['../cursos'])
      );
    } else {
      this.form.markAllAsTouched();
    }
    
    /*if (!(this.activatedRoute.snapshot.url[0].path == 'novo')) {
      if (this.form.valid) {
        this.cursosService.update(this.form.value).subscribe(
          sucess => this.alertModalService.showAlertSuccess('Editado com sucesso'),
          error => this.alertModalService.showAlertDanger('Erro ao salvar a edição do curso'),
          () => this.router.navigate(['../cursos'])
        )
      }
    } else {
      if (this.form.valid) {
        console.log(this.form.value)
        this.cursosService.post(this.form.value).subscribe(
          sucess => this.alertModalService.showAlertSuccess('Salvo com sucesso'),
          error => this.alertModalService.showAlertDanger('Erro ao salvar o curso'),
          () => this.router.navigate(['../cursos'])
        );
      } else {
        this.form.markAllAsTouched();
      }
    }*/

  }

  onResetar() {
    this.form.reset();
  }

  onCancel() {
    this.router.navigate(['../cursos']);
  }

  getErrorMessage(campo: string) {
    return `${campo} é obrigatório`
  }

  /*preencherCampo(campos) {
    this.form.patchValue({
      id: campos.id,
      nome: campos.nome
    });
  }*/

}
