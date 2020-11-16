import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/consulta-cep.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  constructor(
    private consultaCepService: ConsultaCepService,
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form);
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(
      dados => console.log(dados)
    );
  }

  consultaCep(cep, form) {
    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCep(cep).subscribe(
        dados => {
          this.populandoForm(dados, form)
          console.log(dados)
        }
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

}
