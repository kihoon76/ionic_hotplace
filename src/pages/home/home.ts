import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var naver;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };

    this.map = new naver.maps.Map('map', mapOptions);
  }

}
