import { Component, OnInit, inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



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
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  topForProductsArray: ProductsSchema[] = [];

  constructor(private http: HttpClient, private router: Router) { }
  //private service = inject(ProductService); //inject in use 'productService' class in USE!


  getProducts(): Observable<ProductsSchema[]> {
    return this.http.get<ProductsSchema[]>('http://localhost:3030/data/products')
      .pipe(
        catchError(error => of([])) // Handle errors by returning an empty array
      );
  }


  ngOnInit(): void {
    this.getProducts().subscribe(data => {
      this.topForProductsArray = data.slice(0, 4); // Take the first 4 elements
      // this.topForProductsArray = data.slice(-4); // Take the last 4 elements
    });
  }


  onProductSelected(_id: string) {
    this.router.navigate(['/products', _id]); // Navigate to product details route
}

}
