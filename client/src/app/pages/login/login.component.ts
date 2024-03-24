import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

    // reactive form for login!
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });


    loginError: string = '';


    constructor(private auth: AuthService, private router: Router, private http: HttpClient) {}
 

    ngOnInit(): void { //! guard if user i login already!
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['home']);
      }
    }


    onSubmit() {
 
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };


      if (this.loginForm.valid) {
      this.http.post<any>('http://localhost:3030/users/login', credentials)
      .subscribe(response => {
        console.log('Login successful!', response);
        const token = JSON.stringify(response);
        // console.log(token);
        
         // Handle successful registration
         localStorage.setItem('token', token); // Store token in local storage
         this.router.navigate(['/home']); // Redirect to home page

      }, error => {
        console.error('Login error:', error);
        this.loginError = 'Invalid email or password.'; // Set user-friendly error message
        alert(this.loginError);
      });
     }

    }

   

}
