import {Component, OnInit} from '@angular/core';
import {Customer} from '../../dto/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-ordercontent',
  templateUrl: './ordercontent.component.html',
  styleUrls: ['./ordercontent.component.css']
})
export class OrdercontentComponent implements OnInit {
  customers: Customer[] = [];


  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }

  getCustomer() {
    console.log(this.customers);
  }

}
