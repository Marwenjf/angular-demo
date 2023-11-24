import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() newEventEmiter= new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(item:string){
    this.newEventEmiter.emit(item)
  }

}
