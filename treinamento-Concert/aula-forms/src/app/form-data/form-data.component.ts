import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { ConsultaCepService } from '../shared/consulta-cep.service';
import { DropdownService } from '../shared/dropdown.service';
import { Cidades } from '../shared/models/cidades.model';
import { Estados } from '../shared/models/estados.model';
import { Paises } from '../shared/models/paises.model';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent extends BaseFormComponent implements OnInit {


  estados: Estados[];
  paises: Paises[];
  cidades: Cidades[];
  termos = false;
  frameworks = ['Angular', 'React', 'Jquery', 'Vue', 'Sencha', 'Zxing']

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private consultaCepService: ConsultaCepService,
    private dropdownService: DropdownService,
    private verificaEmailService: VerificaEmailService
  ) {
    super();
  }

  ngOnInit(): void {

    //this.verificaEmailService.verificarEmail('email@email.com').subscribe();

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [this.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, this.cepValidator]],
        rua: [null, Validators.required],
        num: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        nacionalidade: [null, Validators.required]
      }),
      frameworks: this.buildFrameworks()
    })
    this.dropdownService.getEstados().subscribe(
      estado => {
        this.estados = estado

      }
    );
    this.dropdownService.getPaises().subscribe(
      pais => {
        this.paises = pais;
      }
    );

    this.form.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(console.log),
        switchMap(status => status === 'VALID' ? this.consultaCepService.consultaCep(this.form.get('endereco.cep').value) : empty())
      )
      .subscribe(
        dados => dados ? this.preencherCampos(dados) : {});
  }

  submit() {
    let valueSubmit = Object.assign({}, this.form.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks.map(
        (v, i) => v ? this.frameworks[i] : null
      ).filter(v => v !== null)
    })
    this.httpClient.post('http://httpbin.org/post', JSON.stringify(valueSubmit)).subscribe(
      dados => {
        console.log(dados)
        //this.resetarForm();
      },
      (error: any) => alert('erro')
    );
  }

 

  consultaCep() {
    let cep = this.form.value.endereco.cep;
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        if (this.form.value.endereco.cep) {
          this.consultaCepService.consultaCep(this.form.value.endereco.cep).subscribe(
            dados => {
              this.preencherCampos(dados)
            }
          )
        }
      }
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
    let siglaEstado: string = this.form.value.endereco.estado;
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

  permitirSubmit() {
    this.termos = !this.termos;
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, this.requiredMinCheckBox(1));
  }

  getFrameworksControls() {
    return this.form.get('frameworks') ? (<FormArray>this.form.get('frameworks')).controls : null;
  }

  requiredMinCheckBox(min = 1) {
    const validator = (formArray: FormArray) => {
      /*let totalChecked = 0;
      const values = formArray.controls;
      for (let i = 0; i < values.length; i++) {
        if (values[i].value){
          totalChecked += 1; 
        }
      }*/
      const totalChecked = formArray.controls.map(v => v.value).reduce((total, atual) => atual ? total + atual : total, 0)
      return totalChecked >= 1 ? null : { required: true }
    };


    return validator
  }

  cepValidator(formControl: FormControl) {
    const cep = formControl.value;

    if (cep && cep !== '') {
      const validaCep = /^[0-9]{8}/;
      return validaCep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null
      }

      const field = (<FormGroup>formControl.root).get(otherField);
      if (!field) {
        throw new Error('É necessário informar um campo.');
      }

      if (field.value !== formControl.value) {
        return {
          equalsTo: otherField
        }
      }
      return null;
    }
    return validator
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value).pipe(
      map(emailExiste => emailExiste ? { emailInvalido: true } : null)
    )
  }

}
