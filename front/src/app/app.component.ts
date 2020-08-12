import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnDestroy , OnInit{
ngOnInit() {
  sessionStorage.clear();
}

  ngOnDestroy() {

}


  title = 'front';
}
