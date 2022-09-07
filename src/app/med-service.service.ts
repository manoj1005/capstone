import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Medicine } from './medicine';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedServiceService {

  baseUrl="http://localhost:8082/";

  constructor(private httpclient:HttpClient) { }
  medicine:Medicine=new Medicine();


  getAllMed():Observable<Medicine[]>{
    let url=this.baseUrl+"med/getall";
    return this.httpclient.get<Medicine[]>(url);
  }
  addmed(medicine:Medicine):Observable<Object>{
    let url=this.baseUrl+"med/register";
    return this.httpclient.post(url,medicine);
  }

  deletemed(id:number){
    let url=this.baseUrl+"med/del/"+id;
    return this.httpclient.delete(url).subscribe(data=>{
      return this.getAllMed();
  });
}
updateMed(med:Medicine):Observable<Object>{
  let url=this.baseUrl+"med/update";
  return this.httpclient.put(url,med);
}
findMedById(id:number):Observable<Object>{
  let Url=this.baseUrl+"med/get/"+id;
  return this.httpclient.get(Url);
}
findMedByName(id:string):Observable<Object>{
  let Url=this.baseUrl+"med/byname/"+id;
  return this.httpclient.get(Url);
}
}
