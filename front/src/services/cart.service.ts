import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() {

  }

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
    this.items = [];
    return this.items;
  }
}

