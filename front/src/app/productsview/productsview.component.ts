import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {CartService} from '../../services/cart.service'
import {cameraLoadService} from '../../services/camera-load.service'
import {CameraModel} from "../../models/camera.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-productsview',
  templateUrl: './productsview.component.html',
  styleUrls: ['./productsview.component.scss']
})
export class ProductsviewComponent implements OnInit {

  public stuff: CameraModel[] = [];
  public part: number;
  public loading: boolean;

  private stuffSub: Subscription;
  private partSub: Subscription;
  chosenId: string;

  constructor(private cartService :CartService,
              private router: Router,
              private stuffService: cameraLoadService ) {}

  ngOnInit() {

    this.loading = true;
    this.stuffSub = this.stuffService.stuff$.subscribe(
      (stuff) => {
        this.stuff = stuff;
        this.loading = false;
      }
    );

    this.stuffService.getStuff();
  }


  addToCart(product: any) {
   this.cartService.addToCart(product);
  }

  onProductClicked(name: string) {

      this.router.navigate(['/product/' + name]);
    }
}
