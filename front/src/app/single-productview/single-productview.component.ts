import { Component, OnInit } from '@angular/core';
import {cameraLoadService} from "../../services/camera-load.service";
import {CartService} from "../../services/cart.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import {CameraModel} from '../../models/camera.model'

@Component({
  selector: 'app-single-productview',
  templateUrl: './single-productview.component.html',
  styleUrls: ['./single-productview.component.scss']
})
export class SingleProductviewComponent implements OnInit {
  thing: any;
  loading: boolean;

  constructor(private stuffService: cameraLoadService,
             private cartService: CartService,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(
      (params: Params) => {
        this.stuffService.getThingById(params.id).then(
          (thing: CameraModel) => {
            this.loading = false;
            this.thing = thing;
          }
        );
      }
    );

  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }


}
