import { Component, OnInit } from '@angular/core';
import { MedServiceService } from '../med-service.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med-register',
  templateUrl: './med-register.component.html',
  styleUrls: ['./med-register.component.css']
})
export class MedRegisterComponent implements OnInit {

  constructor(private medservice:MedServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  medicine:Medicine=new Medicine();
  medReg(){
    this.medservice.addmed(this.medicine).subscribe(data=>{
      alert("successfully registered");
      this.route.navigate(['/getallmed']);
    },
    error=>alert("Error Occured"));
  }
}
