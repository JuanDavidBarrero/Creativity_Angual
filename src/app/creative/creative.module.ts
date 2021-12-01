import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { CustomersComponent } from './customers/customers.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeadersComponent,
    CustomersComponent,
    TeamMembersComponent,
    FooterComponent
  ],
  exports:[
    HeadersComponent,
    CustomersComponent,
    TeamMembersComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreativeModule { }
