import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  

  constructor(
    private bsModalService : BsModalService
  ) { }

  private showAlert(mensagem: string, type: AlertTypes, dismissTimeout = null) {
    const bsModalRef = this.bsModalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = mensagem;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(msg: string) {
    this.showAlert(msg, AlertTypes.DANGER);
  }
  showAlertSuccess(msg: string) {
    this.showAlert(msg, AlertTypes.SUCCESS, 2000);
  }

}
