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
getID(data:any){
  return data.orderId;

}
getPrice(data:any){
   return (data/100).toString();
}
setTotals(){

}
  getTotal (items) {
    let somme = 0;
    for (let entry of items) {
      somme = somme +entry.price ;
    }
    return somme / 100;


}

  clearCart() {
    sessionStorage.clear();
    sessionStorage.removeItem('data');
    sessionStorage.removeItem('totalprice');
    this.items = [];
    this.orderId='';
    this.totalprice=0;

    return this.items;
  }
}

