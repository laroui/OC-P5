import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CameraModel } from '../models/camera.model';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class cameraLoadService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  private stuff: CameraModel[] = [

  ];
  public stuff$ = new Subject<CameraModel[]>();
  emitStuff() {
    this.stuff$.next(this.stuff);
  }

  getStuff () {
    this.http.get(this.baseUrl).subscribe(
      (stuff: CameraModel[]) => {
        if (stuff) {
          this.stuff = stuff;
          this.emitStuff();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  subscribe(param: (stuff) => void) {
    return this.getStuff();
  }
  getThingById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
