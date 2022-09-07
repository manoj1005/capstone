import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  constructor(private adminService:AdminServiceService,private router:Router) { }
  admin:Admin=new Admin();

  ngOnInit(): void {
  }
  adminlogin(){
    console.log(this.admin);
    this.adminService.loginAdmin(this.admin).subscribe(data=>{
      alert("successfully Logged In");
      this.adminService.navigateHome();
    },
      error=>alert("Error Occured"));
  }
  reg(){
    this.router.navigate(['/adminregister'])
  }

}
