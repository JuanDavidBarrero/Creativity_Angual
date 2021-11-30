import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { CustomersComponent } from './customers/customers.component';



@NgModule({
  declarations: [
    HeadersComponent,
    CustomersComponent
  ],
  exports:[
    HeadersComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreativeModule { }
