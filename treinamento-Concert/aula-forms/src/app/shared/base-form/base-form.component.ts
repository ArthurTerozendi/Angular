import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<br>',
})
export abstract class BaseFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit()

  onSubmit() {
    if (this.form.valid) {
      this.submit()
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetarForm() {
    this.form.reset();
  }

  aplicarCssError(campo) {
    if (campo === 'frameworks') {
      return { 'has-error-label': this.verificarValid(campo) }
    }
    return {
      'has-error': this.verificarValid(campo)
    }
  }

  verificarValid(campo) {
    return !this.form.get(campo).valid && this.form.get(campo).touched
  }

}
