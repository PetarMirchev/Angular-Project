import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



export interface ProductSchema {

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
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})

export class SingleProductComponent implements OnInit {
  
  product: ProductSchema = {
    _ownerId: '',
    product: '',
    manufacturer: '',
    description: '',
    price: '',
    quantity: '',
    photo: '',
    _createdOn: 0,
    _id: ''
  };
  error: string | null = null;
  loginError: string | null = null;


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    // Extract product ID from route parameter
    const _id = this.activatedRoute.snapshot.paramMap.get('productId');

    if (_id) {
      // Assuming you have a separate API endpoint for fetching a single product
      this.http.get<ProductSchema>(`http://localhost:3030/data/products/${_id}`)
      .subscribe(response => {
        // console.log('Get Data:', response);
        
      //fetching product details by ID
        this.product =  response;    
      }, error => {
        console.error('Login error:', error);
        this.loginError = 'Invalid email or password.'; // Set user-friendly error message
      });



     
    } else {
      this.error = 'Product ID not found in route parameter.';
    }
  }

}
