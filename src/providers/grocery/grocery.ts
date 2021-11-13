import { Injectable } from '@angular/core';

/*
  Generated class for the GroveryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceryServiceProvider {

  
  Items =[];
  // Items = [
  //   {
  //     name: "bread",
  //     quantity: 1
      

  //   },
  //   {
  //     name: "Milk",
  //     quantity: 3
      

  //   },
  //   {
  //     name: "Cookies",
  //     quantity: 2
      

  //   },
  //   {
  //     name: "Eggs",
  //     quantity: 18
      

  //   },
  //   {
  //     name: "Blueberry",
  //     quantity: 5
      

  //   }

    

  // ]

  GetItem(){

    return this.Items;
  }

  DeleteItem(index){

    this.Items.splice(index, 1);
  }

  AddItem(item){
    this.Items.push(item);

  }

  EditItem(Item,index){

    this.Items[index] = Item;


  }

}

