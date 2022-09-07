import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Admin } from './admin';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpclient:HttpClient,private route:Router) { }

  adminUrl:string="http://localhost:8082/";

  navigateHome() {
    this.route.navigate(['/getallmed']);
  }
  navigateAdminLogin(){
    this.route.navigate(['/adminlogin']);
  }

  registerAdmin(admin : Admin): Observable<Object>{
    let url = this.adminUrl + "admin/add";  
      return this.httpclient.post(url,admin);
  }
  loginAdmin(admin :Admin): Observable<Object>{
    let url = this.adminUrl + "admin/login";
    return this.httpclient.post(url,admin);
  }
}
