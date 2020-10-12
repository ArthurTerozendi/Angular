import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DropdownService } from '../shared/services/dropdown.service';
import { Estados } from '../shared/models/estados.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  formulario : FormGroup;
  estados : Estados[];
  tecnologias : any[];
  newsletterOp: any[];

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient,
    private dropdownService : DropdownService,
    private consultaCepService : ConsultaCepService
    ) {}

  ngOnInit(): void {

    this.dropdownService.getEstados()
      .subscribe(dados => {
        this.estados = dados;
        console.log(dados);
      });
    
    this.tecnologias = this.dropdownService.getTecnologias();
    
    this.newsletterOp = this.dropdownService.getNewsletter();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
      tecnologia: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')]
    });
  }

  onSubmit(){

    if(this.formulario.valid){
      this.http.post("https://httpbin.org/post", JSON.stringify(this.formulario.value)).subscribe(
        dados => {
          console.log(dados)
          this.resetar();
        }, (error) => alert('Error')
      );
    } else {
     /* Object.keys(this.formulario.controls).forEach(
        campos => { 
          console.log(campos);
          const controle = this.formulario.get(campos);
          controle.markAllAsTouched();
        }
      );*/
        const controle = this.formulario;
        controle.markAllAsTouched();
    }
    
    
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaCssError(campo){
    return{
      'has-error' : this.verificaValidTouched(campo)
    }
  }

  consultaCep(){
    const cep = this.formulario.get('endereco.cep').value;
    

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCep(cep).subscribe(
        dados => this.populandoForm(dados)
      );
    }
  }
  populandoForm(dados) {
    this.formulario.patchValue({
      endereco: {
        //cep: dados.cep,
        rua: dados.logradouro,
        complemento: dados.complemento, 
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaForm() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        rua: null,
        complemento: null, 
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
