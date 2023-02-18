import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnChanges, OnInit {

  @Input() inpt:boolean=false

  alltask:any

  constructor (private service:TaskserviceService) {}

  ngOnInit(): void {

    this.service.displaytask().then((res:any)=>res.json()).then(data=>this.alltask=data).catch(err=>console.log(err))
    
  }



  ngOnChanges(changes: SimpleChanges): void {

    if (this.inpt){

      this.service.displaytask().then((res:any)=>res.json()).then(data=>this.alltask=data).catch(err=>console.log(err))


    }



    
  }

  deletetask(id:any){

    // let id:any

    this.service.deletetask(id).then((res:any)=>res.json()).then(data=>console.log()).catch(err=>console.log(err))
  }

}
