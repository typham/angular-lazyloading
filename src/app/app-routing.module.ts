import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerLayoutComponent} from './layouts/customer-layout.component';
import {OrderLayoutComponent} from './layouts/order-layout.component';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {
    path: 'customers', component: CustomerLayoutComponent,
    children: [
      {path: '', loadChildren: './customers/customers.module#CustomersModule'}
    ]
  },
  {
    path: 'orders', component: OrderLayoutComponent,
    children: [
      {path: '', loadChildren: './orders/orders.module#OrdersModule'}
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
