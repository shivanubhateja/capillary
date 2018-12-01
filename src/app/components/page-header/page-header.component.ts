import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() heading = '';
  @Input() headingAlignment = 'left';

  constructor() { }

  ngOnInit() {
  }

}
