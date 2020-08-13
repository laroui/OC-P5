import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items=[];
contact:FormGroup;
  private baseUrl = environment.baseUrl;
  constructor(private router:Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.contact = this.formBuilder.group({
      firstname: ['zzzeez', [Validators.required, Validators.minLength(5)]],
      lastname: ['azeazea', [Validators.required]],
      email: ['ffp@gfg.com', [Validators.required, Validators.email]],
      adresse: ['qsdsd', [Validators.required]],
       ville: ['qsdqsdqsd', [Validators.required]],

    });
  }
  getTotal () {
    return this.cartService.getTotal(this.items);
  }

products =this.cartService.items;
  loading: boolean;



  get firstname() {
    return this.contact.get('firstname');
  }

  get lastname() {
    return this.contact.get('lastname');
  }

  get email() {
    return this.contact.get('email');
  }


  get ville() {
    return this.contact.get('ville');
  }

  get adresse() {
    return this.contact.get('adresse');
  }

  get zipcode() {
    return this.contact.get('zipcode');
  }


  postRequest(form:FormGroup) { // POST call to API with Ajax and Fetch
    let api_URL = this.baseUrl +"order/";
    let products :any =  []; // products: [string]
    products = JSON.stringify(this.items);
    let p = [];
    let price = 0;
    for (var ind in this.items) {
      price = price + this.items[ind].price;
      let r= this.items[ind]._id.toString();
      p.push(r);
    }

    //contactz componenent to match API naming

    let contactz = { // contact {string}
      "lastName": this.lastname.value ,
      "firstName": this.firstname.value,
      "email": this.email.value,
      "address": this.adresse.value,
      "city":this.ville.value
    }


    let myObj = { "contact":contactz, "products":p };


    this.http.post(api_URL,myObj).toPromise().then((data:any) =>{
      this.cartService.totalprice=price;
      this.cartService.orderId=data.orderId.toString();
      sessionStorage.setItem('data',data.orderId.toString())
      sessionStorage.setItem('totalprice', price.toString())
    })


  };

  onSubmit() {

    this.postRequest(this.contact);
    this.router.navigate(['/order-confirmation']);

  }
}








