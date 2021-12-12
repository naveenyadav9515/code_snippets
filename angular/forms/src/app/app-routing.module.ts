import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "incident",
    loadChildren: () => import('./incident-form/incident-form.module')
      .then(m => m.IncidentFormModule)
  },{
    path:'',
    redirectTo:'/incident',
    pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
