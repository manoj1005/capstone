import { Component, OnInit } from '@angular/core';
import { MedServiceService } from '../med-service.service';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-med',
  templateUrl: './update-med.component.html',
  styleUrls: ['./update-med.component.css']
})
export class UpdateMedComponent implements OnInit {

  constructor(private router:Router,private medser:MedServiceService,
    private route:ActivatedRoute) { }
    id :number;
    medicine:Medicine=new Medicine();
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicine=new Medicine();
    this.medser.findMedById(this.id).subscribe((data:any)=>{
      console.log(data)
      this.medicine=data;
    },(error:any)=>console.log(error));
  }
  
  UpdateMed(){
    this.medser.updateMed(this.medicine).subscribe((data:any)=>{
      console.log(data);
      alert("Update Successfull");
      this.router.navigate(['/getallmed']);
    },(error:any)=>console.log(error));
  }
}
