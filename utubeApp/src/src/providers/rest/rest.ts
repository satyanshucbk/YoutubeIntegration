import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'https://www.googleapis.com/youtube/v3/search';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    
  }



  getplaylistvideos(playlistId) {
    return new Promise(resolve => {
      this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyBHKuVAc1Sbk2CZHI3xpEMX6lvezU7LhmQ&maxResults=10&q=ionic tutorial&playlistId='+playlistId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  lodemoreplaylist(playlistId,nexpage_token) {
    return new Promise(resolve => {
      this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyBHKuVAc1Sbk2CZHI3xpEMX6lvezU7LhmQ&maxResults=10&q=ionic tutorial&playlistId='+playlistId+'&pageToken='+nexpage_token).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getVideos(text) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyBHKuVAc1Sbk2CZHI3xpEMX6lvezU7LhmQ&maxResults=10&q='+text).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getscrollvideos(text,token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyBHKuVAc1Sbk2CZHI3xpEMX6lvezU7LhmQ&maxResults=10&q='+text+'&pageToken='+token).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getchannelvideos(channelid) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyBHKuVAc1Sbk2CZHI3xpEMX6lvezU7LhmQ&maxResults=10&q=ionic tutorial&channelId='+channelid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



  

}

