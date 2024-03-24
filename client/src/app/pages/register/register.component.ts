import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';



// Define an interface for your user data (optional)
interface User {
  city: string;
  country: string;
  email: string;
  img: string;
  phone: string;
  username: string;
  password: string;
}



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  registrationError: string = '';


  constructor(
    private auth: AuthService, 
    private router: Router, 
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}


  registerForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  }, { validator: this.comparePasswords });


  //!validator match password logic
  comparePasswords(control: FormGroup): { passwordsDontMatch: boolean  } | null {
    const password = control?.get('password')?.value;
    const repeatPassword = control?.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      return { passwordsDontMatch: true };
    }

    return null;
  }



  ngOnInit(): void { 
    //! guard if user i login already!
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }


  onSend() {//! user is make registration!
    // TODO -- logic for register user & redirect
    debugger
    console.log('click me!');
  

    const user: User = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      city: '',
      country: '',
      img: '',
      phone: ''
    };


    console.log('Sending registration data:', user); // Log data being sent

  // if (this.registerForm.valid) {
    // console.log({user}, this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password);
    
    
      this.http.post<any>('http://localhost:3030/users/register', user)
      .subscribe(response => {
        console.log('Registration successful!', response);
        const token = JSON.stringify(response);
        // console.log(token);
        

        // Handle successful registration
        localStorage.setItem('token', token); // Store token in local storage
        this.router.navigate(['/home']); // Redirect to home page
      }, (error) => {
        console.error('Registration error:', error);
        this.registrationError = 'Registration failed. Please try again.';  // Set error message
        alert(this.registrationError);
      });
    }

}
