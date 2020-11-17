import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConsultaCepService } from '../shared/consulta-cep.service';
import { DropdownService } from '../shared/dropdown.service';
import { Cidades } from '../shared/models/cidades.model';
import { Estados } from '../shared/models/estados.model';
import { Paises } from '../shared/models/paises.model';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  form: FormGroup;
  estados: Estados[];
  paises: Paises[];
  cidades: Cidades[];

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
        nacionalidade: [null, Validators.required]
      }),
    })
    this.dropdownService.getEstados().subscribe(
      estado => {
        this.estados = estado
        console.log(estado);
        
      }
    );
    this.dropdownService.getPaises().subscribe(
      pais => {
        this.paises = pais;
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
        estado: dados.uf,
        complemento: dados.complemento
      },
    });
    this.preencherCidades();
    this.form.patchValue({
      endereco: {
        cidade: dados.localidade
      }
    })
  }

  preencherCidades() {
    let siglaEstado : string = this.form.value.endereco.estado;
    siglaEstado = siglaEstado.trim()
    this.dropdownService.getEstadoID(siglaEstado).subscribe(
      estado => {
        this.dropdownService.getCidades(estado[0].id).subscribe(
          cidade => {
            this.cidades = cidade;
          }
        ) 
      }
    );
  }

}
