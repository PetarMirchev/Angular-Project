import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {NgFor, NgIf} from "@angular/common";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faCartPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Observable, catchError, of } from 'rxjs';


export interface ProductsSchema {

  _ownerId: string;
  product:  string;
  manufacturer:  string;
  description: string;
  price: string; 
  quantity: string; 
  photo: string; 
  _createdOn: number; 
  _id: string; 
}



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule, NgFor, NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {
  faCartPlus= faCartPlus; 
  faStar = faStar;
  faStarHalf = faStarHalf;


  productsArray: ProductsSchema[] = [];

  constructor(private http: HttpClient){ }

  getProducts(): Observable<ProductsSchema[]> {
    return this.http.get<ProductsSchema[]>('http://localhost:3030/data/products')
      .pipe(
        catchError(error => of([])) // Handle errors by returning an empty array
      );
  }


    ngOnInit(): void { 
      this.getProducts().subscribe(data => {
        this.productsArray = data as ProductsSchema[]; 
      });

  }
}