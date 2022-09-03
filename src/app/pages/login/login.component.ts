import { ArrayType, ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { user } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:"",
    password:""
  }
  u:user;
  abc=Array();
  role: Object;

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

 
 token:string;

  loginSubmit(){
    // alert('logged in');
    // console.log(this.loginData);
 
    if(this.loginData.username.trim()==''|| this.loginData.username==null){
     alert('Username is required');
     return;
    }
 
     
    if(this.loginData.password.trim()==''|| this.loginData.password==null){
     alert('password is required');
     return;
   }

   //request server to generate token
   this.login.generateToken(this.loginData).subscribe((data)=>
   {
      console.log('success');
      console.log(JSON.stringify(data));
    //  console.log(this.loginData);
    //  this.login.getUserDetails(this.loginData).subscribe((res:user[])=>{
    //   Array.from(res).forEach(element=>{
    //       this.abc.push(element);
    //     })
       // console.log(this.abc);
    // })

    //working line 57 to 61
    //  this.login.getUserDetails(this.loginData).subscribe((res:user)=>{
    //  this.abc.push(res.firstName);
    //   console.log(res.firstName);
    //  })

    //  console.log(this.abc);
    this.login.getUserDetails(this.loginData).subscribe((data)=>{
      this.u=data;
      //console.log(this.u);
      console.log(typeof(this.u))
      this.login.setUser(this.u);

      let entries = Object.entries(data);
      console.log("checking entries,",entries);
      console.log(entries[0][1]);
      localStorage.setItem('uid',JSON.stringify(entries[0][1]));
      localStorage.setItem('uname',JSON.stringify(entries[1][1]));
      localStorage.setItem('firstname',JSON.stringify(entries[3][1]));
      console.log(console.log('check user'+this.login.getUser()));
      if(this.u==null){
        alert('Invalid Credentials');
        this.router.navigate(['']);
      }
    })

    //localStorage.setItem('username',this.u.username);
    //localStorage.setItem('uid',this.u.id);

    this.login.isAdmin(this.loginData).subscribe((data)=>{
      this.role = data;
      console.log(typeof(data)+" "+data);
      if(this.role==true){
        this.router.navigate(['admin']);
        this.login.loginUser("ADMIN");
      }else{
        this.router.navigate(['user-dashboard']);
        this.login.loginUser("USER");
      }

      const x=this.login.getUser();
      console.log(x);
      console.log(this.login.isLoggedIn());

    })    
  },
  (error) =>
  {
    console.log(error);
     
  }
  ); 
   
 
 }

}
