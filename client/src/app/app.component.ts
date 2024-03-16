import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {  faMagnifyingGlass, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements OnInit{
  title = 'client';

  

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }
}
