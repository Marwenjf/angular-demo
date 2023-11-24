import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-name',
  templateUrl: './info-name.component.html',
  styleUrls: ['./info-name.component.css']
})
export class InfoNameComponent implements OnInit {
  @Input() name!:string
  
  constructor() { }

  ngOnInit(): void {
  }

}
