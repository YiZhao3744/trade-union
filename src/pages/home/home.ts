import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isLoading = true;
  hasError = false;
  errorMsg: string;

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private platform: Platform) {

  }

  onLoad() {
    const t = this.platform.is('ios') ? '_self' : '_blank';
    const ins = this.iab.create('https://erp.35dinghuo.com', t, {
      zoom: 'no',
      location: 'no',
      hideurlbar: 'yes',
    });
    ins.show();
    // ins.on('loadstart').subscribe(res => {
    // }, err => {
    //   this.isLoading = false;
    //   this.hasError = true;
    //   this.errorMsg = err;
    // });
    // ins.on('loadstop').subscribe(res => {
    //   this.isLoading = false;
    // }, err => {
    //   this.isLoading = false;
    //   this.errorMsg = err;
    // });
  }

  ngOnInit(): void {
    this.onLoad();
  }
}
