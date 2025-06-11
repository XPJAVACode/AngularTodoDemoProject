import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeExample';
  username = "suman";
  searchText:string="";
  fruits = ["Apple", "Banana", "Orange"];

  constructor(){
    //simulate to run a change detection from pipe-->impure pipe
    setInterval(()=>{
      this.searchText = this.searchText;
    }, 1000);
  }

  changeUserName(){
    this.username = "Rupesh";
  }

  addFruit(){
    this.fruits.push("Grape");
  }
}
