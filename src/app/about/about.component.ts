import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() color!: string
  name='Test'
  check = false
  counter = 0
  
  infos = {
    name:'marwen',
    email:'mail@mail.com',
    phone:99999999
  }

  comment = {id:0,message:''}
  comments: any[] = []


  constructor() { }

  ngOnInit(): void {
  }
  dec(){
    this.counter--
  }
  inc(){
    this.counter++
  }

  addComment(){
    if (this.comment.message!='') {
      this.comment.id = this.comments.length+1
      this.comments.push({id:this.comment.id,message:this.comment.message})
      this.comment.message=''
      
    }
  }
}
