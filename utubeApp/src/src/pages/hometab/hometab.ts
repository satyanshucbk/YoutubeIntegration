import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the HometabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hometab',
  templateUrl: 'hometab.html',
})
export class HometabPage {

 // @ViewChild('myTabs') tabRef: Tabs;

  page1: any = 'Page1Page';
  page2: any = 'Page2Page';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HometabPage');
  }

  

}
