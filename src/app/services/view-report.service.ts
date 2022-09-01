import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewReportService {

  baseURL:string="http://localhost:8091/search";
  constructor(private httpSer:HttpClient) { }
  
  //search by Category
  public findByCat(cat:string){
    return this.httpSer.get(this.baseURL+'/tech/'+cat);
  }

  //search by state
  public findByState(state:string){
    return this.httpSer.get(this.baseURL+'/state/'+state);
  }

  //search by city
  public findByCity(city:string){
    return this.httpSer.get(this.baseURL+'/city/'+city);
  }

  //search by status
  public findByStatus(passed:string){
    return this.httpSer.get(this.baseURL+'/'+passed);
  }

}
