import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // constructor(private http: HttpClient) { }

  // getAllProducts(): Observable<any[]> {
  //   const data = this.http.get<any[]>("http://localhost:3030/data/products");
  //   console.log({data});
    
  //   return data;
  // };
}



const data1 = [
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Air Max Plus",
    "manufacturer": "Nike",
    "description": "wdsa sad as dasd asas dadsd assd ",
    "price": "22",
    "quantity": "20",
    "photo": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/272b5e57-1507-4f5d-9f58-58da23e4ca26/air-max-plus-shoes-dc0cD5.png",
    "_createdOn": 1701769487646,
    "_id": "b1b099fc-c527-42de-8c50-db113fdf9158"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Air Max Plus 3",
    "manufacturer": "Nike",
    "description": "xxzxxcxcxcxcxcxcxc",
    "price": "22",
    "quantity": "30",
    "photo": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/26bb0f59-837a-43f9-a095-c75d1b8246d7/air-max-plus-3-shoes-d7Lt5d.png",
    "_createdOn": 1701769555433,
    "_id": "94aadeb4-0c90-4dc8-82aa-f60866357159"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Air Max Plus for Women",
    "manufacturer": "Nike",
    "description": "for Women only!",
    "price": "18",
    "quantity": "60",
    "photo": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4c8083c3-feed-46de-ae52-a2a5cdd09b0e/air-max-plus-shoes-0WbhWb.png",
    "_createdOn": 1701769623986,
    "_id": "edf2a590-d43c-4805-b54a-33da26e4f5f7"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Dunk High By You Custom Men's Shoes",
    "manufacturer": "Nike",
    "description": "sa da ddsa sadsa d dsa sadsd a sdasda",
    "price": "35",
    "quantity": "33",
    "photo": "https://static.nike.com/a/images/t_default/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
    "_createdOn": 1701769686958,
    "_id": "f0e8b070-fb56-40e4-8421-179e560d2abd"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Colorful Marshmallow",
    "manufacturer": "Nike",
    "description": "wdsa sadsa  as dasd asas dadsd assd ",
    "price": "28",
    "quantity": "55",
    "photo": "https://www.mimanerashop.com/images/1.1200x1200.5583.webp",
    "_createdOn": 1701769827441,
    "_id": "dde0a6ee-4143-466e-8e3a-08b95e3bed9e"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Air Max Plus Men's Shoes. ",
    "manufacturer": "Nike",
    "description": "sadas a das ad asdasda sas dasdasd asdasd asd",
    "price": "42",
    "quantity": "31",
    "photo": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bc4ea557-e918-4ff5-af44-4bc71f97eb28/air-max-plus-mens-shoes-x9G2xF.png",
    "_createdOn": 1701769877072,
    "_id": "21849d8d-a3bf-4258-948c-d2d281e0817a"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "CITIZEN PROMASTER SKY ECO-DRIVE RADIO CONTROLLED CB5004-59W",
    "manufacturer": "Citizen",
    "description": "sas dad daddojokd jdlkdj akadj jkasd kjas ",
    "price": "220",
    "quantity": "18",
    "photo": "https://www.irisimo.bg/files/product/50381/CITIZEN-PROMASTER-SKY-ECO-DRIVE-RADIO-CONTROLLED-CB5004-59W.jpg",
    "_createdOn": 1701769947822,
    "_id": "83f1ec95-4630-4155-82e7-f9648d48b232"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "CITIZEN JY8058-50L",
    "manufacturer": "Citizen",
    "description": "dsaads das ds ksdka asodiokasj kasj kask jk saj ads a",
    "price": "2312",
    "quantity": "21",
    "photo": "https://bgtime.eu/image/cache/catalog/11111111111111/CITIZEN/91186_1-(1)-910x1155.jpg",
    "_createdOn": 1701770019288,
    "_id": "3ce8aae3-ab91-4c26-8de9-049de4caf100"
  },
  {
    "_ownerId": "60f0cf0b-34b0-4abd-9769-8c42f830dffc",
    "product": "Nike Sportswear Men's T-Shirt",
    "manufacturer": "nikeBG",
    "description": "wdsa sad as dasd asas dadsd assd  dsadasd da dggf gegdf",
    "price": "9",
    "quantity": "100",
    "photo": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/yql7ozajhdesi8vklgb3/sportswear-t-shirt-FPcVXK.png",
    "_createdOn": 1701770113226,
    "_id": "1e284047-b427-489b-876b-1277a32b6642"
  }
]