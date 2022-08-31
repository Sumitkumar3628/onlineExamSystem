import { Component, OnInit } from '@angular/core';
import { report } from 'src/app/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private repSer:ReportService) { }

  repList:report[]=[];



  ngOnInit(): void {

    this.repSer.getReport(localStorage.getItem('uid')).subscribe((data:any)=>{
      this.repList = data;
    },(error)=>{
      alert("Unable to fetch marksheet.");
    })

  }

}
