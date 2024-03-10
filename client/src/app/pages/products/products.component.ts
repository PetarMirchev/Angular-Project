import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { HttpClientModule } from '@angular/common/http';

import {NgFor, NgForOf} from "@angular/common";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faCartPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  faCartPlus= faCartPlus; 
  faStar = faStar;
  faStarHalf = faStarHalf;


  productsArray: any[] = [];

  constructor(private productSrv: ProductService){

  }

  ngOnInit(): void {
      // this.loadProducts();
  }

  loadProducts() {
    // this.productSrv.getAllProducts().subscribe( (ResData: any) => {
    //   this.productsArray = Object.values(ResData); // 11.00
    // });
  }
}
