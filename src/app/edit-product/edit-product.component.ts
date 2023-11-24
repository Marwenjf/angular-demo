import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id!:string
  editFormGroup!: FormGroup
  constructor(private activedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private productSerivce:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id']
    let product = this.productSerivce.getProduct(this.id)
    this.editFormGroup = this.fb.group({
     id: this.fb.control(product?.id),
     name : this.fb.control(product?.name,[Validators.required,Validators.minLength(6)]),
     price: this.fb.control(product?.price,[Validators.required,Validators.min(1000)]),
     promotion: this.fb.control(product?.promotion) 
    })
  }

  handleEditProduct(){
    this.productSerivce.editProduct(this.editFormGroup.value)
    this.router.navigateByUrl('/shop/products')
  }
  
}
