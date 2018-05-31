import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController} from 'ionic-angular';
import { Http, Headers} from '@angular/http';

import { AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture : ''
  };


  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public actionctrl: ActionSheetController,
      public http: Http, private afauth:AngularFireAuth) {

  }

  loginwithfb(){
    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      
      this.facebook.loggedIn = true;
      this.facebook.email = res.user.email;
      this.facebook.name = res.user.displayName;
      this.facebook.profilePicture = res.user.photoURL

    })
  }

  logoutwithfb(){
    this.facebook.loggedIn = false;
    this.afauth.auth.signOut();
  }
  

}
