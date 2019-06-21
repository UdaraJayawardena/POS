import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from '../../dto/item';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-itemcontent',
  templateUrl: './itemcontent.component.html',
  styleUrls: ['./itemcontent.component.css']
})
export class ItemcontentComponent implements OnInit {
  items: Item[] = [];
  SItems: Item[] = [];
  selectedItem: Item = new Item('', '', 0, 0);

  @ViewChild('txtCdoe') txtCode: ElementRef;
  @ViewChild('frmItems') frmItems: NgForm;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getAllItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

  saveItem(): void {
    console.log('Save Click');
    if (!this.frmItems.invalid) {
      this.itemService.saveItem(this.selectedItem)
        .subscribe(resp => {
          if (resp) {
            alert('Item has been saved successfully');
            this.items.push(this.selectedItem);
            this.itemService.getAllItems();
          } else {
            alert('Failed to save the Item');
          }
        });

    } else {
      alert('Invalid Data, Please Correct...!');
    }
  }

  updateItem(code, description, unitprice, qtyonhand): void {
    console.log('Update Click');
    const itemUpdate = new Item(code, description, unitprice, qtyonhand);
    console.log(itemUpdate);
    this.itemService.updateItem(itemUpdate).subscribe(
      (result) => {
        alert('Update successfull..');
        this.itemService.getAllItems();
      }
    );
  }

  deleteItem(code): void {
    console.log('Delete Click..');
    const itemCodeValDel = code;
    this.itemService.deleteItem(itemCodeValDel).subscribe(
      (result) => {
        alert('Item Deleted Successfully...');
        this.itemService.getAllItems();
      }
    );
  }

  searchItem(code): void {
    console.log('search Item in component');
    const itemCodeValSer = code;
    this.itemService.searchItem(itemCodeValSer).subscribe(SItems => {
      console.log(SItems);
      this.SItems = SItems;
      console.log('SItems: ' + this.SItems);
    });
  }


}
