import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginUser } from './LoginUser';
import { AuthenticationModel } from "../authentication.model";
import { UserService } from '../services/user.service';

@Injectable()
export class LoginAuthService {
 
  authenticationModel: AuthenticationModel = new AuthenticationModel();
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userEmail;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  login(user: AuthenticationModel){
    console.log("inside if chk admin==> "+this.authenticationModel.email+" "+this.authenticationModel.userId)
    console.log("useid in loginauth=="+user.userId+"  "+user.location);
    if (user.email !== '' && user.password != '')
    {
      // this.loggedIn.next(true);
      // this.router.navigate(['/home']);
      console.log("inside if chk admin==> "+this.authenticationModel.email+" "+this.authenticationModel.userId)
    this.userEmail=user.email;
    if ( user.email == "admin@mail.com" && user.password == "admin") {
    this.loggedIn.next(true); 
    this.router.navigate(['/admin']);
      alert("admin loged in successfully");
    }
    
    else {
      this.loggedIn.next(true);
      this.userService.produceUserId(user.userId);
      this.router.navigate(['/home',user.userId]);
      alert("user loged in successfully");
    }
  }
  }
  socialLogin(user: string){

    
    if (this.authenticationModel.email !== '' && this.authenticationModel.password != ''){
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }
  logout(){
    console.log("inside logout service==============");
    console.log("usernaem in logout "+this.userEmail);
    this.loggedIn.next(false);
    this.router.navigate(['/maverick']);
    this.userService.logoutUser(this.userEmail)
    .subscribe(data => {
      console.log("data log " + data);

    });
  }
}
