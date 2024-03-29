import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }

  resetpaswrd(){
   this.navCtrl.push(ResetPasswordPage);
  }

}
