import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Item} from '../../dto/item';
import {ItemService} from '../../service/item.service';
import {Customer} from '../../dto/customer';

@Component({
  selector: 'app-ordercontent',
  templateUrl: './ordercontent.component.html',
  styleUrls: ['./ordercontent.component.css']
})
export class OrdercontentComponent implements OnInit {
  customers: Customer[] = [];
  items: Item[] = [];
  cusname = '';
  cusaddress = '';
  cussalary = '';
  itemprice = '';
  itemqtyonhand = '';

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

  getSelectedId(event: any) {
    const values = event.target.value;
    const CUSVals = this.customers.find((value => value.id === values));
    this.cusname = CUSVals.name;
    this.cusaddress = CUSVals.address;
    this.cussalary = String(CUSVals.salary);

  }

  getSelectedCode(event: any) {
    const itemValues = event.target.value;
    const ItemVals = this.items.find((value => value.code === itemValues));
    this.itemprice = String(ItemVals.unitPrice);
    this.itemqtyonhand = String(ItemVals.qtyOnHand);

  }


}
