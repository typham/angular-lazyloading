import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CustomerLayoutComponent} from './layouts/customer-layout.component';
import {OrderLayoutComponent} from './layouts/order-layout.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLayoutComponent,
    OrderLayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
