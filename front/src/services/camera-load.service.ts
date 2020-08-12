import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CameraModel } from '../models/camera.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class cameraLoadService {

  constructor(private http: HttpClient) {}

  private stuff: CameraModel[] = [

  ];
  public stuff$ = new Subject<CameraModel[]>();
  emitStuff() {
    this.stuff$.next(this.stuff);
  }

  getStuff () {
    this.http.get('http://localhost:3000/api/cameras').subscribe(
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
      this.http.get('http://localhost:3000/api/cameras/' + id).subscribe(
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
