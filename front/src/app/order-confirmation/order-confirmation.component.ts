import { Component, OnInit ,OnDestroy , Input } from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {CartService} from '../../services/cart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']

})

export class OrderConfirmationComponent implements OnInit, OnDestroy {
 totalprice:any;
 orderId:string;

  constructor(private router:Router,
              public cart:CartService) {
this.orderId=cart.getID();
  this.totalprice=cart.getTotal(cart.items);




  }
clear(){
  this.cart.clearCart();
  this.router.navigate(['/']);
}
  ngOnInit(): void {
  //reset de l'espace de stockage :)


  }
  ngOnDestroy() {




  }


}
