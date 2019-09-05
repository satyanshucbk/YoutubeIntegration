import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUp } from '../SignUp/signup';
import { Login } from '../Login/Login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {



  }

  signup(){

    this.navCtrl.push(SignUp);
  }

  login(){

    this.navCtrl.push(Login);
  }

}
