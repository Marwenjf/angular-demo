import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { UUID } from 'angular2-uuid';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //apiUrl = "https://mocki.io/v1/9d5c238d-a5e5-4a7e-ac3e-1d864b62e104"
  products!: Product[]
  constructor(private http:HttpClient) { 
    this.products = [
      {id:UUID.UUID(),name:'prodct1',price:1000,promotion:false},
      {id:UUID.UUID(),name:'prodct2',price:500,promotion:false},
      {id:UUID.UUID(),name:'prodct3',price:100,promotion:true},
      {id:UUID.UUID(),name:'prodct4',price:5000,promotion:false},
      {id:UUID.UUID(),name:'prodct5',price:750,promotion:true}
    ]
  }

  getProducts():Observable<any>{
    //return this.http.get(this.apiUrl)
    return of(this.products) 
  }

  setPromotion(id:string){
    let product = this.products.find(pr=>pr.id==id)
    product!.promotion= !product!.promotion
  }

  deleteProduct(id:string){
    return this.products.filter(product=>product.id!=id)
  }

  addProduct(p:Product){
    p.id= UUID.UUID()
    this.products.push(p)
  }

  getProduct(id:string){
    let product = this.products.find(p=>p.id==id)
    return product
  }

  editProduct(product:Product){
    this.products = this.products.map(p=>(p.id==product.id)?product:p)
  }
}
