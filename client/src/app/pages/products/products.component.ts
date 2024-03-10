import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faCartPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  faCartPlus= faCartPlus; 
  faStar = faStar;
  faStarHalf = faStarHalf;
}
