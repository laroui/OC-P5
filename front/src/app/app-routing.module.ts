import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component'
import {SingleProductviewComponent} from './single-productview/single-productview.component'
import {OrderConfirmationComponent} from './order-confirmation/order-confirmation.component'
import {AppComponent} from './app.component'
import { ProductsviewComponent } from './productsview/productsview.component'
const routes: Routes = [{ path: 'home', pathMatch: 'full', component:ProductsviewComponent  },
  { path :'' ,pathMatch : 'full' , component:ProductsviewComponent },
  { path :'cart' ,pathMatch : 'full' , component:CartComponent },
  {path: 'product/:id' , component:SingleProductviewComponent },
  {path: 'order-confirmation' , component:OrderConfirmationComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
