import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CustomError } from '../helpers/validator.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup
  errorMessage!: string
  submitted = false
  constructor(private fb:FormBuilder,
    private router:Router,
    public customError:CustomError,
    private auth:AuthService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username : this.fb.control(null,[Validators.required]),
      password : this.fb.control(null,[Validators.required]) 
    })
  }

  handleLogin(){
    this.submitted = true
    if (this.userForm.invalid) {
      return
    }
    let username = this.userForm.value.username
    let password = this.userForm.value.password
    this.auth.login(username,password).subscribe({
      next:(user)=>{
        this.auth.authenticateUser(user).subscribe({
          next:(data)=>{
            this.router.navigateByUrl('/shop/products')
          }
        })
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
  }

}
