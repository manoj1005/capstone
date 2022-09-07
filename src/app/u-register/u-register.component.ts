import { Component, OnInit } from '@angular/core';
import { URegisterServiceService } from '../u-register-service.service';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-u-register',
  templateUrl: './u-register.component.html',
  styleUrls: ['./u-register.component.css']
})
export class URegisterComponent implements OnInit {

  user:User=new User();
  constructor(private userRegister:URegisterServiceService,private route : Router) { }

  ngOnInit(): void {
  }
  
  userReg(){
    console.log(this.user);
    this.userRegister.registerUser(this.user).subscribe(data=>{
        alert("successfully registered");
        console.log("user login");
        this.route.navigate(['/userlogin']);
      },
      error=>alert("Error Occured"));
  }
  login(){
    this.route.navigate(['/userlogin']);
  }
}
