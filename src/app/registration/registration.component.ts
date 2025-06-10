import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      hobbies: this.fb.array([this.fb.control('', Validators.required)]),
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordValidator
    });
  }

  get hobbies(): FormArray{
    return this.registerForm.get('hobbies') as FormArray;
  }

  addHobies(){
    this.hobbies.push(this.fb.control('', Validators.required));
  }
  passwordValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  disableCopy(event : ClipboardEvent){
    event.preventDefault();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
