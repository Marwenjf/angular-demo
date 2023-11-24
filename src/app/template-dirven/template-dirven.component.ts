import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-dirven',
  templateUrl: './template-dirven.component.html',
  styleUrls: ['./template-dirven.component.css']
})
export class TemplateDirvenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(product: NgForm){
    console.log(product)
  } 
}
