import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './helpers/loader/loader.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderIntercepterInterceptor } from './interceptors/loader-intercepter.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    GetApiComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoaderIntercepterInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
