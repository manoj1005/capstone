import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URegisterServiceService } from '../u-register-service.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User=new User();
  constructor(private userRegister:URegisterServiceService,private route : Router) { }

  ngOnInit(): void {
  }
  userReg(){
    console.log(this.user);
    this.userRegister.registerUser(this.user).subscribe(data=>{
        console.log("user login");
        this.route.navigate(['/getallusers']);
      },
      error=>alert("Error Occured"));
  }
}
