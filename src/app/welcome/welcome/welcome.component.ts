import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  nameFromUrl:string="";
  userId:string="";

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //1 first way of reading the URL params
  //  this.nameFromUrl = this.activatedRoute.snapshot.params['name'];
  //  this.userId = this.activatedRoute.snapshot.queryParams['id'];
   //http://localhost:4200/welcome/Suman?id=edsdwofeehwfieohcefnsfhhhefajo
   //2nd subscribe the URLs
   this.activatedRoute.params.subscribe(parameter=>{
    this.nameFromUrl = parameter['name'];
   });
   this.activatedRoute.queryParams.subscribe(parameter=>{
    this.userId = parameter['id'];
   });
  }


  //Oauth 2.0 -> Oauth 3.0 vs JWT
 //Attacks
 // 2PC->Saga and Dual write Problem
// N+1 problem
// API design
  
}
