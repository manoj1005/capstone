import { Component, OnInit } from '@angular/core';
import { URegisterServiceService } from '../u-register-service.service';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-u-getall',
  templateUrl: './u-getall.component.html',
  styleUrls: ['./u-getall.component.css']
})
export class UGetallComponent implements OnInit {
  constructor(private userRegister:URegisterServiceService,private route:Router) { }
  users:User[]=[];

  ngOnInit(): void {
    this.getallusers();
  }

  getallusers(){
    this.userRegister.getAllUser().subscribe(result=>this.users=result);
  }

  Delete(id:number){
    this.userRegister.deleteUser(id);
    alert(id+" got deleted");
  }
  Update(id:number){
    this.route.navigate(['updateUser', id]);
  }
  getallmed(){
    this.route.navigate(['/getallmed']);
  }

  adduser(){
    this.route.navigate(['/adduser'])
  }

}
