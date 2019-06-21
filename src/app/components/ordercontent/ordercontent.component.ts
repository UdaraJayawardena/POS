import {Component, OnInit} from '@angular/core';
import {Customer} from '../../dto/customer';
import {CustomerService} from '../../service/customer.service';
import {Item} from '../../dto/item';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-ordercontent',
  templateUrl: './ordercontent.component.html',
  styleUrls: ['./ordercontent.component.css']
})
export class OrdercontentComponent implements OnInit {
  customers: Customer[] = [];
  items: Item[] = [];


  constructor(private customerService: CustomerService, private itemService: ItemService) {
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });

    this.itemService.getAllItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

}
