import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registerForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
   this.registerForm = this.fb.group({
     username :['', [Validators.required, Validators.minLength(6)]],
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
     confirmPassword: ['', Validators.required]
   },{
      validators: this.passwordValidator
   });

  }
  passwordValidator(){
    const password = this.registerForm.get('password')?.value;
    const confPassword = this.registerForm.get('confirmPassword')?.value;
    return password === confPassword ? null : {mismatch: true};
  }
  onSubmit(){

  }

}
