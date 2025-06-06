import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoginSuccess:boolean=true;
  email= "";
  password = "";

  constructor(private route: Router, private authService: AuthenticationServiceService) {}

  handleLogin(){
    //backend
    const postData = {
      email: this.email,
      password: this.password
    };
    this.authService.handleBEAuthentication(postData).subscribe({
      next: (successResponse) =>{
        this.isLoginSuccess = true;
        console.log(successResponse);
        //Its a success, so we will naviagte to list-todo page
        //backend call here to get the firstName with the help of email
        let firstName = "Suman";
        this.route.navigate(['/welcome', firstName], {queryParams:{id:sessionStorage.getItem('user_id')}});
      },
      error: (errorValue) =>{
        console.log(errorValue);
        this.isLoginSuccess = !this.isLoginSuccess;
      }
    });
  }
}
