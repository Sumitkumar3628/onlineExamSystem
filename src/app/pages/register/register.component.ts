import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder,private userService: UserService,private router:Router,private snack:MatSnackBar) { }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public user={
    username:"",
    password:"",
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    phone:"",
    city:"",
    state:"",
    qualification:"",
    year_of_completion:"",
    dob:"",
  };

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.user.email=='' ||this.user.username==''||this.user.password=='')
    {
      //alert('Please fill required fiels');
      this.snack.open("Please fill required fields",'',{
        duration:2000,
        verticalPosition:"top"
      });
      return;
    } 
       // console.log(this.user);


    //add user:userservice

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        //console.log(data);
        alert('user successfully registered');
        this.router.navigate(['']);
      },
      (error) =>{
        //error
        console.log(error);
        this.snack.open("Something went wrong",'',{
          duration:2000
        })
        //alert("Something went wrong");
      }

    )
  }
  
  

}
