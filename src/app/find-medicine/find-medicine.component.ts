import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedServiceService } from '../med-service.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-find-medicine',
  templateUrl: './find-medicine.component.html',
  styleUrls: ['./find-medicine.component.css']
})
export class FindMedicineComponent implements OnInit {
  medicine:Medicine;
  medicineName:any;
  constructor(private route: ActivatedRoute,private router: Router,
    private medservice:MedServiceService) { }

  ngOnInit(): void {
    this.medicine=new Medicine();
    this.medicineName = this.route.snapshot.params['medicineName'];
    console.log(this.medicineName);
    this.medservice.findMedByName(this.medicineName).subscribe((data:Medicine)=>{
      console.log(data);
      this.medicine=data;
    },(error: any) => console.log(error));

  }
  list(id:number){
    this.router.navigate(['payment',id]);
  }


}
