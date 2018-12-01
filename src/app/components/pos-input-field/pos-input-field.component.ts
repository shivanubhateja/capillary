import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pos-input-field',
  templateUrl: './pos-input-field.component.html',
  styleUrls: ['./pos-input-field.component.css']
})
export class PosInputFieldComponent implements OnInit {

  @Input() model;
  @Input() label;
  @Input() inputType;
  @Input() infieldLabel;
  @Input() fieldName;
  @Input() fieldType;
  @Input() placeHolder;
  @Input() required;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onValueChange() {
    this.valueChange.emit(this.model);
  }
}
