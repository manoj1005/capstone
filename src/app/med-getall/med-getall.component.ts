import { Component, OnInit } from '@angular/core';
import { MedServiceService } from '../med-service.service';
import { Medicine } from '../medicine';
import {Router} from '@angular/router';

@Component({
  selector: 'app-med-getall',
  templateUrl: './med-getall.component.html',
  styleUrls: ['./med-getall.component.css']
})
export class MedGetallComponent implements OnInit {

  constructor(private medservice:MedServiceService,private route:Router) { }
  medicine:Medicine[]=[];
  ngOnInit(): void {
    this.getAll();
     }
  getAll(){
    this.medservice.getAllMed().subscribe(result=>this.medicine=result);
 
  }
  Delete(id:number){
      this.medservice.deletemed(id);
      alert(id+" got deleted");
  }
  Update(id:number){
    this.route.navigate(['updatemed',id]);
  }

  gotousers(){
    this.route.navigate(['/getallusers']);
  }
  addmed(){
    this.route.navigate(['/medRegister'])
  }

}
