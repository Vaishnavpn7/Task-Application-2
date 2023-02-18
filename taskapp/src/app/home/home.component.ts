import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isTaskAdded:boolean=false
  reciveMessage(event:boolean){

    this.isTaskAdded=event
    console.log(event);
    
  }

}
