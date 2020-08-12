import { Component, OnInit ,OnDestroy } from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {CartService} from '../../services/cart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit, OnDestroy {
  totalprice :any;
  orderId:any;

  constructor(private router:Router,
              private cart:CartService) {
    this.totalprice =localStorage.getItem('totalprice')
    this.orderId = localStorage.getItem('orderid')
    this.totalprice = this.totalprice.concat("€");
    alert("And pada "+ localStorage.getItem('totalprice'))
  }
clear(){
  this.cart.clearCart();
  localStorage.clear();
  this.router.navigate(['/']);
}
  ngOnInit(): void {

  //reset de l'espace de stockage :)


  }
  ngOnDestroy() {




  }


}
