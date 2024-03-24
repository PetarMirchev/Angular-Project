import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


import { AuthService } from './auth/auth.service'; //for logout functionality

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit{
  title = 'client';

  token: string | null = null;
  isUserLogIn: boolean = false; //check if user is logged (have Token!)
  

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
        // (Optional) Check if token exists before proceeding
        if (this.token) {
          this.isUserLogIn =  true;      
        } else {
          //console.log('No token found in localStorage.');
          this.isUserLogIn =  false; 
        }
  }

  logout(): void {
    this.auth.logout();
  }
  
}
