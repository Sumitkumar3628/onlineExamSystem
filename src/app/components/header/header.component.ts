import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogIn:boolean;
  
  constructor(public logSer:LoginService) { 
     
  }
  ngOnInit(): void { 
  }
  
  




  
  
  

}
