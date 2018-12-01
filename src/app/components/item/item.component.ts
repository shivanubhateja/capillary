import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() index;
  @Output() valueChange = new EventEmitter();
  @Output() removeItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onValueChange = (fieldType, data) => {
    this.item[fieldType] = data;
    const item = this.item;
    const index = this.index;
    this.valueChange.emit({item, index});
  }

  removeItem() {
    this.removeItemEvent.emit(this.index);
  }
}
