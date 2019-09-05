import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ChannellistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channellist',
  templateUrl: 'PlayList.html',

})
export class PlaylistPage {
  data:any;
  videos:any;
  playlist_id:string;
  nextPagetoke:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restprovider:RestProvider) {
    this.playlist_id=this.navParams.get('playlis_id');

     this.getplaylistvideos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannellistPage');
  }

  getplaylistvideos(){
    this.restprovider.getplaylistvideos(this.playlist_id)
    .then(data => {
      console.log(data);
      this.data=data;
      this.videos=this.data.items;
      this.nextPagetoke=this.data.nextPageToken
    });
  }

  doInfinite(infiniteScroll){
    this.restprovider.lodemoreplaylist(this.playlist_id,this.nextPagetoke)
    .then(data => {
      this.data = data;
      for(let i=0; i<this.data.items.length; i++) {
        this.videos.push(this.data.items[i]);
      }
      this.nextPagetoke=this.data.nextPageToken;
      infiniteScroll.complete();

      if (this.videos.length === this.data.pageInfo.totalResults) {
        infiniteScroll.enable(false);
      }

    });
    
    //alert("scroll")
  }
}
