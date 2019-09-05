import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HometabPage } from '../hometab/hometab';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  movetohome(){
    this.navCtrl.push(HometabPage);
  }

}


 /* let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = new FormData();
    body.append('username', username);
    body.append('password', password);
    console.log(body);
    console.log(headers);
    return this.http.post('http://api/v1/get_user',body,headers).map((res: Response) => res.json());*/

