import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUp } from '../pages/SignUp/signup';
import { Login } from '../pages/Login/Login';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { VerificationPage } from '../pages/verification/verification';
import { HometabPage } from '../pages/hometab/hometab';
 import { ResultvideoPage } from '../pages/resultvideo/resultvideo';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PlaylistPage } from '../pages/PlayList/PlayList';
import { ChannelListPage } from '../pages/channel-list/channel-list';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUp,
    Login,
    ForgotpasswordPage,
    ResetPasswordPage,
    VerificationPage,
    HometabPage,
    ResultvideoPage,
    PlaylistPage,
    ChannelListPage,
    // Page2Page,
    // Page1Page,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages: true,
    },)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUp,
    Login,
    ForgotpasswordPage,
    ResetPasswordPage,
    VerificationPage,
    HometabPage,
    ResultvideoPage,
    PlaylistPage,
    ChannelListPage,
    // Page2Page,
    // Page1Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    YoutubeVideoPlayer,
  ]
})
export class AppModule {}
