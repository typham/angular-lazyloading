import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'customer-layout-component',
  template: `
    <div>CUSTOMER LAYOUT</div>
    <router-outlet></router-outlet>
  `
})

export class CustomerLayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
