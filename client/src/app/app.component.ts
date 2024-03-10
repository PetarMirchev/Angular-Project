import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faMagnifyingGlass, faCartShopping, faXmark, faUser, faShop, } from '@fortawesome/free-solid-svg-icons';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  faCoffee = faCoffee;
  faMagnifyingGlass = faMagnifyingGlass;
  faCartShopping = faCartShopping;
  faXmark = faXmark;
  faUser = faUser;
  faShop = faShop;
}
