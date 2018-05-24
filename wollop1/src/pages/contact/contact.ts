import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  bmr : number;
  
  sport : any;
  total : number;
  
  constructor(public navCtrl: NavController) { }
  
  calBmi() {
    if(this.sport == "a"){
      this.total = (1.2 * this.bmr)
    
    }if(this.sport=="b"){
      this.total = (1.375 * this.bmr)
    
    }if(this.sport == "c"){
      this.total = (1.55 * this.bmr)
    
    }if(this.sport == "d"){
      this.total = (1.7 * this.bmr)

    }if(this.sport == "e"){
      this.total = (1.9 * this.bmr)
    }


   }

}
