import { Component, OnInit } from '@angular/core';
import { URegisterServiceService } from '../u-register-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

constructor(private router:Router,private userser:URegisterServiceService,
  private route:ActivatedRoute) { }
  id!:number;
  user:User=new User();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user=new User();
    this.userser.findUserById(this.id).subscribe((data : any)=>{
      console.log(data)
      this.user=data;
    },(error:any)=>console.log(error));
  }
  updateU(){
    this.userser.updateUser(this.user).subscribe((data:any)=>{
      console.log(data);
      alert("Successfully Updated");
      this.router.navigate(['/getallusers']);
    },(error:any)=>console.log(error));
  }
  onsubmit(){
    this.updateU();
  }
}
