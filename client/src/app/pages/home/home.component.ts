import { Component, OnInit, inject } from '@angular/core';
import { IBrewery } from '../../services/Brewery.interface';
import { ProductService } from '../../services/product.service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: IBrewery | undefined;
  isLoading = false;
  hasError = false;
  result = [];

  constructor(private service: ProductService) { }
  //private service = inject(ProductService); //inject in use 'productService' class in USE!

  ngOnInit(): void {
    // this.service.getAll().pipe(
    //   catchError(() => {
    //     this.isLoading = false;
    //     this.hasError = true;
    //     console.log('Error on fetch load data!');
    //     return [];
    //   })
    // ).subscribe((data) => {
    //   this.data = {...data};
    //   this.isLoading = true;
    //   this.hasError = false;
    // });
    // console.log('onInit works!', this.data?.id);
    
  }

  // getAllProducts(): Observable<any[]> {
  //   const data = this.http.get<any[]>("http://localhost:3030/data/products");
  //   console.log({data});
    
  //   return data;
  // };

}
