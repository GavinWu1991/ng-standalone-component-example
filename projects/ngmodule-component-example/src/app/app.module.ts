import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SayHelloModule} from "./components/say-hello.directive";

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SayHelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
