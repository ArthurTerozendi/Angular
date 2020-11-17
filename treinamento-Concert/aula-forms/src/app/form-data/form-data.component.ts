import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConsultaCepService } from '../shared/consulta-cep.service';
import { DropdownService } from '../shared/dropdown.service';
import { Estados } from '../shared/models/estados.model';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  form: FormGroup;
  estados: Estados[];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private consultaCepService: ConsultaCepService,
    private dropdownService : DropdownService
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
    this.dropdownService.getEstados().subscribe(
      estado => {
        this.estados = estado
        console.log(estado);
        
      }
    );
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
    this.form.reset();
  }

  aplicarCssError(campo) {
    return {
      'has-error': this.verificarValid(campo)
    }
  }

  verificarValid(campo) {
    return !this.form.get(campo).valid && this.form.get(campo).touched
  }

  consultaCep() {
    if (this.form.value.endereco.cep) {
      this.consultaCepService.consultaCep(this.form.value.endereco.cep).subscribe(
        dados => {
          this.preencherCampos(dados)
        }
      )
    }
  }

  preencherCampos(dados) {
    this.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        complemento: dados.complemento
      },
    });
  }

}
