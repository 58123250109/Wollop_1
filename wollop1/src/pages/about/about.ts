import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

weight : number;
height : number;
age : number;
total : number;
gender : any;

  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {}
 
  showalert() {
    if(this.gender=="a"){
      this.total = 66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age) 
    }else{
      this.total = 665 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age)
    }
   
  }
       
}
