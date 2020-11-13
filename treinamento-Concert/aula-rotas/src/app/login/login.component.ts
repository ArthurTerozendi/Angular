import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logado = false;
  errorLogin = false;

  form : FormGroup;

  constructor(
    private loginService : LoginService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: [null],
      senha: [null]
    })
  }
  
  efetuarLogin() {
    this.errorLogin = this.loginService.estadoLogin();
    this.loginService.logar(this.form.value);
  }

}
