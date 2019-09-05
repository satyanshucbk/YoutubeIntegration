import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';

@Component({
  selector: 'page-login',
  templateUrl: 'Login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {

  }


  
  fogotpasswrd(){
  this.navCtrl.push(ForgotpasswordPage);
  }

}
