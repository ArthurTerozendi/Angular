import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsPocRoutingModule } from './rxjs-poc-routing.module';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocComponent } from './componentes/poc.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until.component';
import { PocTakeComponent } from './componentes/poc-take.component';
import { PocUnsubComponent } from './componentes/poc-unsub.component';
import { PocAsyncComponent } from './componentes/poc-async.component';


@NgModule({
  declarations: [
    UnsubscribePocComponent,
    PocBaseComponent,
    PocComponent,
    PocBaseComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocAsyncComponent,
    PocUnsubComponent
  ],
  imports: [
    CommonModule,
    RxjsPocRoutingModule
  ]
})
export class RxjsPocModule { }
