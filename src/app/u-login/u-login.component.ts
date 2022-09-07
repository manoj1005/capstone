import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URegisterServiceService } from '../u-register-service.service';
import { User } from '../user';

@Component({
  selector: 'app-u-login',
  templateUrl: './u-login.component.html',
  styleUrls: ['./u-login.component.css']
})
export class ULoginComponent implements OnInit {

  constructor(private userReg: URegisterServiceService,private route:Router) { }
  
  user:User=new User();

  ngOnInit(): void {
  }
  userlogin(){
    console.log(this.user);
    this.userReg.loginUser(this.user).subscribe(data=>{
      alert("successfully Logged In");
      this.userReg.navigateHome();
    },
      error=>alert("Error Occured"));
  }
  reg(){
    this.route.navigate(['/userregister']);
  }
}
