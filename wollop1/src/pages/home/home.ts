import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
weight : number;
height : number;
total : number;

  constructor(public navCtrl: NavController , public alertCtrl:AlertController) {}

  
    clickAlert(){
      this.total = this.weight / this.height
    }

    ShowAlert(){
      
      if(this.weight / this.height < 18.50){
      let alert = this.alertCtrl.create({
        title: 'วัดตามเกณฑ์',
        subTitle: 'ผอมกว่าปกติ',
        buttons: ['ตกลง']
      });
      alert.present();
    
     }else{
      let alert = this.alertCtrl.create({
        title: 'วัดตามเกณฑ์',
        subTitle: 'สุขภาพดี',
        buttons: ['ตกลง']
      });
      alert.present();
    }

  } 
}
    
  

    
          

  
   




