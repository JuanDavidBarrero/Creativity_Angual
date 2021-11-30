import { Component, OnInit } from '@angular/core';
import { customer } from '../intefaces/customer.intefaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: customer[] = [
    {
      name: "Jane Lee",
      stars: ["fas fa-star","fas fa-star", "fas fa-star","fas fa-star","fas fa-star-half-alt"],
      path: "assets/customer-img-1.jpg"
    },
    {
      name: "Mike Sacle",
      stars: ["fas fa-star","fas fa-star", "fas fa-star","fas fa-star","fas fa-star-half-alt"],

      path: "assets/customer-img-2.jpg"
    },
    {
      name: "Floor Hansberk",
      stars: ["fas fa-star","fas fa-star", "fas fa-star","fas fa-star","fas fa-star"],
      path: "assets/customer-img-3.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
