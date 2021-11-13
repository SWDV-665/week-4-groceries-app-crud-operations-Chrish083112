import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {GroceryServiceProvider} from '../../providers/grocery/grocery';
import { InputserviceProvider } from '../../providers/inputservice/inputservice';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public data: GroceryServiceProvider, public input: InputserviceProvider ) {

  }

  LoadItem(){
    
    
    return this.data.GetItem();
    
  }

  title = "Grocery List"

 
  DeleteItem(Item,index){
    console.log("Deleted")
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + Item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.data.DeleteItem(index)
    
  }


  
  AddItem(){

    console.log("Added")
    this.input.showPrompt();

  }

  

  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.input.showPrompt(item, index);
  }  

  
}
