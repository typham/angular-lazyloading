import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'order-layout-component',
  template: `
    <div>ORDER LAYOUT</div>
    <router-outlet></router-outlet>
  `
})

export class OrderLayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
