import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestmodComponent } from './testmod.component';
import { CompComponent } from './comp/comp.component';



@NgModule({
  declarations: [
    TestmodComponent,
    CompComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestmodModule { }
