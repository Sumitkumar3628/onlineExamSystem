import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user';
import baseUrl from './baseUrl_here';


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  u:user;

  constructor(private httpser:HttpClient) { }
  url:string="http://localhost:8091/";

 //generate token
 public generateToken(loginData:any){
  return this.httpser.post(`${baseUrl}/login/`,loginData);

 }

 public getUserDetails(loginData:any):Observable<any>{
    //return this.httpser.get<user>(this.url+'/login/getuser/'+loginData.username);
    return this.httpser.get(this.url + 'login/getuser/'+loginData.username);
 }

 public isAdmin(loginData:any){
  return this.httpser.get(this.url+'login/isadmin/'+loginData.username);
 }




 //login user
 public loginUser(token:string){
  if(token=="ADMIN"){
    localStorage.setItem('token',token);
    console.log(token);
    return true;
  }
  if(token=="USER"){
    localStorage.setItem('token',token);
    console.log(token);
    return true;
  }
  console.log("token not varified"); 
  return false;
 }

 //isLogin : user is Logged in or not
 public isLoggedIn(){
    console.log('token from isLoggedIn'+localStorage.getItem('token'));
    let tokenStr=localStorage.getItem('token');
    if(tokenStr=="false" || tokenStr==undefined ||tokenStr==null){
      return false;
    }else{
      return true;
    }
 }

 //logout : remove token from local storage
 public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
 }

 //get token from local storage
 public gettoken(){
  return localStorage.getItem('token');
 }

 //set userDetails
 public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
 }

 //getUser
 public getUser(){
  let userStr = localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
 }

 //get user role
 public getUserRole(){
  let user = this.getUser();


 }

 public checkAdmin(token:any){
  if(token=="ADMIN"){
   //console.log(token);
    return true;
  }
  else {
  return false;
 }
 }

}
