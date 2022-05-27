import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl='http://localhost:8080/api/products';

  constructor(private HttpClient:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.HttpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response=>response._embeded.products)
    );
  }
}
    
   interface GetResponse{
     _embeded:{
       products:Product[]
     }
   }