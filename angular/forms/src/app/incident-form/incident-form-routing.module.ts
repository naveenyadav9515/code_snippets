import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthenticatedUserComponent } from './components/un-authenticated-user/un-authenticated-user.component';

const routes: Routes = [
  {
    path:'',
    component:UnAuthenticatedUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentFormRoutingModule { }
