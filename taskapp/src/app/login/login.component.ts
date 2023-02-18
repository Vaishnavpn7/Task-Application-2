import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TaskserviceService } from '../services/taskservice.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private service:TaskserviceService, private router:Router ) {}

  loginform=new FormGroup({

    'username':new FormControl("", Validators.required),
    'password':new FormControl("",Validators.required)
  })

  get username(){
    return this.loginform.get('username')

  }
  
  get password(){
    return this.loginform.get('password')
  }



  autenticate(){

    console.log(this.loginform.value);

    this.service.getToken(this.loginform.value).then(res=>res.json()).then(data=>{
      let token=data.token
      localStorage.setItem('token','Token '+token)
      this.router.navigateByUrl('home')
    })    

  }

}
