import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Product[] 
             // Array<Product>
  errorMessage!: string

  constructor(private router:Router,
    public auth:AuthService,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.hendleGetAllProducts()
  }

  hendleGetAllProducts(){
     this.productService.getProducts().subscribe({
      next:(d)=>{
       this.products=d
      },
      error:(e)=>{
        this.errorMessage=e
      }
     })
  }

  handleSetPromotion(p:Product){
    this.productService.setPromotion(p.id)
  }

  handleDeleteProduct(p:Product){
    let conf = confirm('Are you sure?')
    if (!conf) {
      return
    }
    this.products =this.productService.deleteProduct(p.id)
  }

  handleEditProduct(p:Product){
     this.router.navigate(['shop/products/edit/'+p.id])
     //this.router.navigateByUrl('edit/'+p.id)
  }

  handleAddProduct(){
     this.router.navigate(['shop/products/add'])
  } 
}
