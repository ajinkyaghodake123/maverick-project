import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginUser } from '../loginUser.model';
import { UserService } from '../services/user.service';
import { LoginUserService } from '../services/login-user.service';
import { Router } from "@angular/router";
import { AuthenticationModel } from "../authentication.model";
import { Observable } from 'rxjs/Observable';
import { LoginAuthService } from '../LoginAuth/login-auth.service';
import { RegDialogComponent } from '../reg-dialog/reg-dialog.component';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private loginAuthService: LoginAuthService,
    private socialAuthService: AuthService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private userService: LoginUserService,
    private us: UserService) { }
  isLoggedIn$: Observable<boolean>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  msg='';
  msg1='';
  

  ngOnInit() {
    this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
  }

  validateEmail = true;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  hide = true;


  onNoClick(): void {
    this.dialogRef.close();
  }
  user: LoginUser = new LoginUser();
  authenticationModel: AuthenticationModel = new AuthenticationModel();


  loginUser(authenticationModel: AuthenticationModel) {
    console.log("email: " + authenticationModel.email + " pass: " + authenticationModel.password+"")

    this.userService.loginUser(authenticationModel)
      .subscribe(data => {
        if(data != null){
          this.us.getUserByEmail( data.email)
          .subscribe(data1 => {
            console.log(data1)
          console.log("data in login--"+data1.userId+" "+data1.email+" "+data1.location);
          if (data1 != null) {
            this.loginAuthService.login(data);
           
          }
         
          } )
          console.log("data userid=>>>>> " + data.userId+" "+data.location);
        }
        else {
          alert("wrong credentials ")
        }
       


      });
  }
  openDialog2(): void {
    let dialogRef = this.dialog.open(RegDialogComponent, {
      width: '600px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  color: string;

  availableColors = [
    { name: 'log in', color: 'primary' },


  ];
  availableRegisterColors = [

    { name: 'Register', color: 'accent' },

  ];
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        this.loginAuthService.socialLogin(socialPlatformProvider);
        
       // this.router.navigate(['category']);
        // Now sign-in with userData

      }
    );
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