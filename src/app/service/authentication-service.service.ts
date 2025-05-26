import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare const appUrl: String

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  constructor(private http : HttpClient){}

  handleBEAuthentication(postData:any){
    return this.http.post(appUrl+'update/', postData, {headers : {'Content-Type': 'application/json'}});
  }
}
