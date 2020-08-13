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
  @Input() totalprice:any;
  @Input() orderId:any;

  constructor(private router:Router,
              private cart:CartService) {

  this.totalprice=cart.totalprice;
  this.orderId=cart.orderId;
    alert("And pada "+ this.totalprice)
    alert("ID: " + this.orderId)
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
