import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../dto/customer';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-customercontent',
  templateUrl: './customercontent.component.html',
  styleUrls: ['./customercontent.component.css']
})
export class CustomercontentComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomer: Customer = new Customer('', '', '', 0);

  @ViewChild('txtId') txtId: ElementRef;
  @ViewChild('frmCustomer') frmCustomer: NgForm;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  saveCustomer(): void {
    if (!this.frmCustomer.invalid) {

      this.customerService.saveCustomer(this.selectedCustomer)
        .subscribe(resp => {
          if (resp) {
            alert('Customer has been saved successfully');
            this.customers.push(this.selectedCustomer);
          } else {
            alert('Failed to save the customer');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

}
