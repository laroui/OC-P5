import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() {

  }
  orderId:string;
  totalprice:any;
  items = [];
  addToCart(product) {
    this.items.push(product);
    localStorage.setItem('panier', JSON.stringify(this.items));

  }
  getItems() {
    return this.items;
  }

  getTotal (items) {
    let somme = 0;
    for (let entry of items) {
      somme = somme +entry.price ;
    }
    return somme / 100;


}
  clearCart() {
    localStorage.clear();
    localStorage.removeItem('data');
    localStorage.removeItem('totalprice');
    this.items = [];


    return this.items;
  }
getID(){
    return this.orderId;
}

}

