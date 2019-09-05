import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { ResultvideoPage } from '../resultvideo/resultvideo';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  resultvideo(textsrch){
    console.log(textsrch);
   if(textsrch=="" || textsrch==undefined){
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter text to be search',
      buttons: ['Dismiss']
    });
    alert.present();
   }
   else{
    this.navCtrl.push(ResultvideoPage,{"searchtxt":textsrch});
   }

  }

}
