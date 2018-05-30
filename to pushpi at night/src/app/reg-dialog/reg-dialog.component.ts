import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { AuthenticationModel } from "../authentication.model"
import {FormBuilder, FormGroup, Validators,NG_VALIDATORS, FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailValidator } from '@angular/forms'; 
// import { CustomFormsModule } from 'ng2-validation'
import { Observable } from 'rxjs/Observable';
import { MatRadioChange } from '@angular/material';
import { VERSION } from '@angular/material';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-reg-dialog',
  templateUrl: './reg-dialog.component.html',
  styleUrls: ['./reg-dialog.component.css']
})
export class RegDialogComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  msg='';
  msg1='';
  PASS_REGEX=/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
 // emailp: FormControl;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private _fb: FormBuilder,
    private _pass: FormBuilder
 ) { 
  this.testForm =this._fb.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
  });
  this.passForm =this._pass.group({
    password: ['', [Validators.required, Validators.pattern(this.PASS_REGEX)]],
  });
  // this.firstFormGroup = this._formBuilder.group({
  //   'email': ['', [Validators.required, EmailValidator.emailValidator]],
  //   'password': ['', [Validators.required, ValidationService.passwordValidator]],
  //   'currency': ['', [Validators.required, ValidationService.currencyValidator]]
  // });
 }
 
 //emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  user: User = new User();
  authenticationModel:AuthenticationModel = new AuthenticationModel();
  
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
   //   email:['', [Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      
    });
    
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }
  regiseterUser(user: User){  
    console.log("reg name======="+this.user.userName);
      // this.user.user(name,password,email,location,mobile);
      this.userService.registerprofileUser( user)
      .subscribe(data => {
       
    });
      this.userService.registerUser( user)
      .subscribe(data => {
        console.log("data val===="+data);
       // console.log("before byemail  api call=="+data.email);
        if(data !=null){
        if (data.email != null && data.password != null){
        this.userService.getUserByEmail( data.email)
        .subscribe(data1 => {
          console.log(data1)
        console.log("data in reg--"+data1.userId+" "+data1.email+" "+data1.location);
        alert("user created successfully");
        if (this.user.email != null && this.user.password != null){
          console.log("data aftre reg----"+data.userId);
          this.router.navigate(['categorySuggetions',data.userId]);
        }
        
        } )
      }}
      else{
        alert("user is already exist")
        this.router.navigate(['maverick']);
      }
      });
    }
    startDate = new Date(1990, 0, 1);

  array = ['Male', 'Female'];

  radioChange(event: MatRadioChange) {
    console.log(event.value);
  }

  version = VERSION;
  public testForm = new FormGroup({});
  public passForm = new FormGroup({})

  public email: string;
  public errorTest:Array<any> = [
    {type:'pattern', msg:'Please enter a valid email address'},
    {type:'required', msg:'Email  <strong>required</strong>'},
  ];
  public error:Array<any> = [
    {type:'pattern', msg:'Please enter a valid passqord '},
    {type:'required', msg:'password  <strong>required</strong>'},
  ];

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
}


check(psw)
{
  console.log(psw.match("/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/"))
  console.log(psw)
  this.msg='';
  // this.msg="password should have";
  if(psw.length<6){

   this.msg=this.msg+" more than 6 letters required ";
  }
  var i;
  var c;
  var j=0;
  var j1=0;
  var j2=0;
  for(i=0;i<psw.length;i++ )
  {
    c=psw.charAt(i);
    console.log("===="+c)
   if(!isNaN(c * 1))
   {
       j++;
   }
   if(c==c.toUpperCase())
   {
      j1++;
   }
   if(c==c.toLowerCase())
   {
      j2++;
   }
  }
  if(j==0)
  {
    this.msg=this.msg+" one number required ";
  }
  if(j1==0)
  {
    this.msg=this.msg+" one capital letter required ";
  }
  if(j2==0)
  {
    this.msg=this.msg+" one lower letter required ";
  }
  
}
checkEmail(psw)
{
  console.log(psw.match("/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/"))
  console.log(psw)
  this.msg1='';
  // this.msg="password should have";
  
  var i;
  var c;
  
  var j1=0;
  var j2=0;
  var j3=0;
  for(i=0;i<psw.length;i++ )
  {
    c=psw.charAt(i);
    console.log("===="+c)
    if(psw.charAt(0) == "@" || psw.charAt(1) =="@" && psw.charAt(0) == "." || psw.charAt(1) =="."){
      j3++;
    }
    else{
      if(c=='@')
      {
         j2++;
      }
   
      if(c=='.')
      {
         j1++;
      }
    }
   
  
  
  }
  if (j3 !=0){
    this.msg1=this.msg1+" Enter valid email   ";
  }
  if(j3 == 0){
    if(j2==0)
    {
      this.msg1=this.msg1+" @ Required  ";
    }
    if(j1==0)
    {
      this.msg1=this.msg1+" . Required  ";
    }
  }
  else{
    this.msg1=this.msg1+" Enter valid email   ";
  }
 
  
}
set()
{
  this.msg1='';
  this.msg='';
}
}
