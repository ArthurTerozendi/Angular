import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private consultaCepService : ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form);

    this.http.post("https://httpbin.org/post", JSON.stringify(form.value)).subscribe(
      dados => console.log(dados)
    );
  }

  consultaCep(cep, form){
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCep(cep).subscribe(
        dados => this.populandoForm(dados, form)
      );
    }
  }
  populandoForm(dados, form) {
    console.log(form);

    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        complemento: dados.complemento, 
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaForm(form) {
    form.form.patchValue({
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
