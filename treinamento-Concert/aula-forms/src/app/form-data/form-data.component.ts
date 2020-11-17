import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        rua: [null, Validators.required],
        num: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        pais: [null, Validators.required]
      }),
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.valid);
      this.httpClient.post('http://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
        dados => {
          console.log(dados)
          //this.resetarForm();
        },
        (error: any) => alert('erro')
      );
    } else {
      this.form.markAllAsTouched();
    }

  }

  resetarForm() {
    console.log('resetou')
    this.form.reset();
  }

  aplicarCssError(campo){
    console.log('test')
    return{
      'has-error': this.verificarValid(campo)
    }
  }

  verificarValid(campo) {
    return !this.form.get(campo).valid && this.form.get(campo).touched
  }

}
