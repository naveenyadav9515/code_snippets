import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentFormRoutingModule } from './incident-form-routing.module';
import { UnAuthenticatedUserComponent } from './components/un-authenticated-user/un-authenticated-user.component';
import { AuthenticatedUserComponent } from './components/authenticated-user/authenticated-user.component';
import { CardComponent } from './helpers/components/card/card.component';
import { InputDirective } from './helpers/directives/input.directive';


@NgModule({
  declarations: [
    UnAuthenticatedUserComponent,
    AuthenticatedUserComponent,
    CardComponent,
    InputDirective
  ],
  imports: [
    CommonModule,
    IncidentFormRoutingModule
  ]
})
export class IncidentFormModule { }
