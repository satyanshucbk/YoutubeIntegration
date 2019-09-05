import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ChannelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-list',
  templateUrl: 'channel-list.html',
})
export class ChannelListPage {
  channel_id:string;
  nextPagetoke:string;
  videos:any;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restprovider:RestProvider) {
    this.channel_id=this.navParams.get('channel_id');
    this.getchannelvideos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelListPage');
  }


  getchannelvideos(){
    this.restprovider.getchannelvideos(this.channel_id)
    .then(data => {
      console.log(data);
      this.data=data;
      this.videos=this.data.items;
      this.nextPagetoke=this.data.nextPageToken
    });
  }
}
