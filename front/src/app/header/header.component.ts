import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService) {
    this.items=cartService.items_count;

  }

  ngOnInit(): void {
  }

items:any;

 getitems(){
   return this.items;
 }
}
