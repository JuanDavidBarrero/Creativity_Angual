import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreativeModule } from './creative/creative.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CreativeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
