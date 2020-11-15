import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/consulta-cep.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  constructor(
    private consultaCepService : ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(form);
  }

  preencherCampos(form){
    let cep  = form.endereco.cep;
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


}
