import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-a-register',
  templateUrl: './a-register.component.html',
  styleUrls: ['./a-register.component.css']
})
export class ARegisterComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }

  admin:Admin=new Admin();

  ngOnInit(): void {
  }

  adminReg(){
    console.log(this.admin);
    this.adminService.registerAdmin(this.admin).subscribe(data=>{
        alert("successfully registered");
        this.adminService.navigateAdminLogin();
      },

      error=>alert("Error Occured"));

  }
  login(){
    this.adminService.navigateAdminLogin();
  }

}
