import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items= ['item1','item2','item3','item4']
  color = "red"
  childColor = 'green'
  addItemParent(item:string){
     this.items.push(item)
  }

}
