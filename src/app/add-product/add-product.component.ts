import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomError } from '../helpers/validator.helper';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prodcutFormGroup!: FormGroup
  submitted = false
  constructor(private fb:FormBuilder,
    public customError:CustomError,
    private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.prodcutFormGroup = this.fb.group({
     name : this.fb.control(null,[Validators.required,Validators.minLength(6)]),
     price: this.fb.control(null,[Validators.required,Validators.min(1000)]),
     promotion: this.fb.control(false)   
    })
  }

  handleAddProduct(){
    this.submitted = true
    if (this.prodcutFormGroup.invalid) {
      return
    }
    this.productService.addProduct(this.prodcutFormGroup.value)
    this.router.navigateByUrl('/shop/products')
  }

}
