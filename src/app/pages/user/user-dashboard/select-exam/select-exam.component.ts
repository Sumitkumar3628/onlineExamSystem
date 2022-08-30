import { Component, OnInit } from '@angular/core';
import { SendCatIdService } from 'src/app/services/send-cat-id.service';

@Component({
  selector: 'app-select-exam',
  templateUrl: './select-exam.component.html',
  styleUrls: ['./select-exam.component.css']
})
export class SelectExamComponent implements OnInit {

  constructor(private catIdSer:SendCatIdService) { }

  ngOnInit(): void {
  }

  javaSelect(){
    console.log('javaSelect called')
    alert('java select'+this.catIdSer.sendCategoryId(23));
    this.catIdSer.sendCategoryId(23);
    sessionStorage.setItem("catId","23");
  }
  sqlSelect(){
    this.catIdSer.sendCategoryId(26);
    sessionStorage.setItem("catId","26");
  }

  pythonSelect(){
    this.catIdSer.sendCategoryId(27);
    sessionStorage.setItem("catId","27");
  }

  cSelect(){
    this.catIdSer.sendCategoryId(28);
    sessionStorage.setItem("catId","28");
  }

}
