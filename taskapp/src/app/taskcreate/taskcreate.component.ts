import { Component, EventEmitter, Output } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent {

  @Output()outputvalue:EventEmitter<boolean>= new EventEmitter()

  constructor (private servive:TaskserviceService) {}



  taskadd(inpt:any){

    this.outputvalue.emit(false)

    let data = {'task_name':inpt.value}

    this.servive.addtask(data).then((res:any)=>res.json()).then(data=>{ console.log(data)
      this.outputvalue.emit(true)
    }).catch(err=>console.log(err))

    
  }

}
