import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { CustomersComponent } from './customers/customers.component';
import { TeamMembersComponent } from './team-members/team-members.component';



@NgModule({
  declarations: [
    HeadersComponent,
    CustomersComponent,
    TeamMembersComponent
  ],
  exports:[
    HeadersComponent,
    CustomersComponent,
    TeamMembersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreativeModule { }
