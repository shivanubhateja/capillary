import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() placeholder = '';
  @Output() selectedDateChanged = new EventEmitter();

  selectedDate;
  constructor() { }

  ngOnInit() {
  }

  onValueChange() {
    this.selectedDateChanged.emit(this.selectedDate);
  }
}
