import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ItemModel } from '../../models/formEntity';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {

  @Input() itemList = [];
  @Output() itemsChanges = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  itemUpdated($event) {
    const _index = $event.index;
    const _item = $event.item;
    this.itemList = this.itemList.map((item, index) => {
      return index === _index ? _item : item;
    });
    this.itemsChanges.emit(this.itemList);
  }

  addNewItem() {
    this.itemList.push(new ItemModel('item ' + (this.itemList.length + 1), 1, 1, 0));
    this.itemsChanges.emit(this.itemList);
  }

  removeItem(index) {
    this.itemList.splice(index, 1);
    this.itemsChanges.emit(this.itemList);
  }
}
