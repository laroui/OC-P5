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
  items_count=0;
  addToCart(product) {
    this.items.push(product);
    localStorage.setItem('panier', JSON.stringify(this.items));
    this.items_count=this.items_count +1;
    window.alert('Your product has been added to the cart!'+ this.items_count);

  }
  RemoveFromCart(product) {
    console.log('before delete'+this.items_count);

    this.items.splice(product.id,1);
    console.log(this.items_count);
    localStorage.setItem('panier', JSON.stringify(this.items));
    this.items_count=this.items_count -1;
    window.alert('Your product has been removed from the cart!'+ this.items_count);

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

