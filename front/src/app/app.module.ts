import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ProductsviewComponent } from './productsview/productsview.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CartComponent } from './cart/cart.component';
import {MatButtonModule} from '@angular/material/button';
import { SingleProductviewComponent } from './single-productview/single-productview.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    ProductsviewComponent,
    CartComponent,
    SingleProductviewComponent,
    OrderConfirmationComponent,

  ],
  imports: [
  ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],
  providers: [ FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
