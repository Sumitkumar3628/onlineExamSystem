import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:8091/";

   //add Report
   public addReport(report:any){
    return this.http.post(this.url+'report/add',report);
}

//get report list
public getReport(uid:any){
  return this.http.get(this.url+'report/showAll/'+uid);
}

}
