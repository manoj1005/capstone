import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class URegisterServiceService {
  
  baseUrl="http://localhost:8082/user/";

  
  constructor(private httpclient : HttpClient,private route:Router) { }

  navigateHome() {
    this.route.navigate(['/menu']);
  }
  navigateReg(){
    this.route.navigate(['/userregister']);
  }

  navigateLogin(){
    console.log("in the login page");
    this.route.navigate(['/userlogin']);
    console.log("in the login page");

  }

  registerUser(user: User): Observable<Object>{
    let url = this.baseUrl + "reg";  
      return this.httpclient.post(url,user);
  }
  loginUser(user:User): Observable<Object>{
    let url = this.baseUrl + "login";
    return this.httpclient.post(url,user);
  }

  getAllUser():Observable<User[]>{
    let url=this.baseUrl+"getall";
    return this.httpclient.get<User[]>(url);
  }

  deleteUser(id:number){
    let url=this.baseUrl+"delete/"+id;
    this.httpclient.delete(url).subscribe(data=>{
      return this.getAllUser();
    });
  }
  updateUser(user:User):Observable<Object>{
    let url=this.baseUrl+"update";
    return this.httpclient.put(url,user);
  }
  findUserById(id:number):Observable<Object>{
    let Url=this.baseUrl+"get/"+id;
    return this.httpclient.get(Url);
  }
}
