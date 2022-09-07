import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';
import { MedServiceService } from '../med-service.service';

@Component({
  selector: 'app-med-category',
  templateUrl: './med-category.component.html',
  styleUrls: ['./med-category.component.css']
})
export class MedCategoryComponent implements OnInit {

  constructor(private router: Router,private medService:MedServiceService ) { }
  medicineName:any;
  findByMedicineName(){
    this.router.navigate(['findMedicineByName', this.medicineName]);
  }

  ngOnInit(): void {
    this.med();
  }
  medicine:Medicine[];
  med(){
    this.medService.getAllMed().subscribe((Response)=>{
      this.medicine = Response;
    },(error=>{

    }));
  }

  paynow(id:number){
    this.router.navigate(['payment',id]);

  };

}
