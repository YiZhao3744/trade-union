import { Component } from '@angular/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hasError = false;
  errorMsg: string;
  url = '';

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private platform: Platform, private events: Events) {}

  onLoad() {
    if(this.platform.is('ios')) this.hide(2);
    const t = this.platform.is('ios') ? '_self' : '_blank';
    const ins = this.iab.create('https://erp.35dinghuo.com', t, {
      zoom: 'no',
      location: 'no',
      hideurlbar: 'yes',
      presentationstyle: 'pagesheet'
    });
    // ins.on('loadstart').subscribe(res => {
    // }, err => {
    //   alert(2222);
    //   this.hasError = true;
    //   this.errorMsg = err;
    // });
    ins.on('loadstop').subscribe(res => {
      this.events.publish('hide');
    }, err => {
      this.errorMsg = err;
    });
    ins.show();
  }

  hide(num) {
    setTimeout(() => {
      this.events.publish('hide');
    }, num * 1000);
  }

  ngOnInit(): void {
    this.onLoad();
  }
}
