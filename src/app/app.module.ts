import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { HttpModule} from '@angular/http';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { QuoteService} from '../services/quotes';

import { Facebook } from '@ionic-native/facebook';

import { GooglePlus } from "@ionic-native/google-plus";

const firebase = {
    apiKey: "AIzaSyAN8nr8-gXjlXvpSEPpqL3lcl5xbE_pNqM",
    authDomain: "damloginfacebook.firebaseapp.com",
    databaseURL: "https://damloginfacebook.firebaseio.com",
    projectId: "damloginfacebook",
    storageBucket: "damloginfacebook.appspot.com",
    messagingSenderId: "178878864784"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    SportsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
     GooglePlus,
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
