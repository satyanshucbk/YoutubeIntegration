import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PlaylistPage } from '../PlayList/PlayList';
import { ChannelListPage } from '../channel-list/channel-list';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

/**
 * Generated class for the ResultvideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultvideo',
  templateUrl: 'resultvideo.html',
})
export class ResultvideoPage {
  videos:any;
  data:any;
  nextPagetoke:String;
  text:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restprovider:RestProvider,private youtube: YoutubeVideoPlayer) {
    this.text=navParams.get('searchtxt');
    this.showvideos(this.text);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultvideoPage');
  }

  showvideos(text) {
    this.restprovider.getVideos(text)
    .then(data => {
      this.data = data;
      this.videos=this.data.items
      this.nextPagetoke=this.data.nextPageToken;
      console.log(this.data);
    });
  }

  channelvideos(datavideo){
     if(datavideo.playlistId){
       this.navCtrl.push(PlaylistPage,{"playlis_id":datavideo.playlistId})
     }
     else if(datavideo.videoId){
      alert("videoId");


    } else if(datavideo.channelId){
      this.navCtrl.push(ChannelListPage,{"channel_id":datavideo.channelId})

    }



  }

  playyoutubevideo(){
    this.youtube.openVideo('myvideoid');

  }

  doInfinite(infiniteScroll){
    this.restprovider.getscrollvideos(this.text,this.nextPagetoke)
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
