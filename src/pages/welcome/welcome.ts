import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuoteService } from '../../services/quotes';
import { SportsPage } from '../sports/sports'
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public quote:QuoteService) {
    console.log("Información: "+ this.quote.data.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  gotoSports(){
    this.navCtrl.push(SportsPage);
  }

}
