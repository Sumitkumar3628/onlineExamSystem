import { Component, OnInit } from '@angular/core';
import { ViewReportService } from 'src/app/services/view-report.service';
import { user } from 'src/app/user';


@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {


  constructor(private viewRepSer:ViewReportService) { }

  ngOnInit(): void {
  }

  category:string;
  state:string;
  city:string;
  status:string;
  ulist:any;

  public findByCategory(){
    this.viewRepSer.findByCat(this.category).subscribe((data)=>{
      //console.log(data);
      this.ulist = data;
    },()=>{
      alert("Something Went wrong.");
    })
  }

  public findByState(){
    this.viewRepSer.findByState(this.state).subscribe((data)=>{
      this.ulist = data;
    },()=>{
      alert("Something went wrong.")
    })
  }
  public findByCity(){
    this.viewRepSer.findByCity(this.city).subscribe((data)=>{
      this.ulist=data;
    },()=>{
      alert("Something went wrong.")
    })

  }
  public findByStatus(){
    if(this.status=="passed"){
      this.viewRepSer.findByStatusPassed(this.status).subscribe((data)=>{
        this.ulist = data;
      },()=>{
        alert("Something went wrong.");
      })
    }else{
      this.viewRepSer.findByStatusPassed(this.status).subscribe((data)=>{
        this.ulist = data;
      },()=>{
        alert("Something went wrong.");
      })
    }
    

  }

}
