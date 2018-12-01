import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/formEntity';

@Component({
  selector: 'app-pos-form-component',
  templateUrl: './pos-form-component.component.html',
  styleUrls: ['./pos-form-component.component.css']
})
export class PosFormComponentComponent implements OnInit {

  formDataObj = {
    items: [new ItemModel('Item 1', 1, 1, 0)],
    subTotal: 0,
    totalWithTax: 0,
    tax: 0
   };
  constructor() { }

  ngOnInit() {
    this.calculateTotal();
  }
  onValueChange(attributeName, value) {
    this.formDataObj[attributeName] = value;
    console.log(this.formDataObj);
    this.calculateTotal();
  }
  handleItemChange(itemList) {
    this.formDataObj.items = itemList;
    console.log(this.formDataObj);
    this.calculateTotal();
  }

  calculateTotal() {
    let subTotal = 0;
    this.formDataObj.items.forEach(item => {
      subTotal += item.quantity * item.rate;
    });
    this.formDataObj.subTotal = subTotal;
    this.formDataObj.totalWithTax = subTotal + (subTotal * this.formDataObj.tax) / 100;
  }

  printBill() {
    window.print();
  }
}
