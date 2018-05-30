import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoginAuthService } from '../LoginAuth/login-auth.service';
import { Observable } from 'rxjs/Observable';
import { LoginUserService } from '../services/login-user.service';
import { AuthenticationModel } from "../authentication.model";
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  authenticationModel: AuthenticationModel;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router: Router,
    private loginAuthService: LoginAuthService,
    private userService: LoginUserService,
   ) { }
  onLogout() {
    // this.userService.loginUser()
    // .subscribe(data => {});
    console.log()
    console.log("inside logout ")
 this.loginAuthService.logout();
    // this.loggedIn.next(false);
    // this.router.navigate(['/land'])

    // this.authService.logout();
  }
  isLoggedIn$: Observable<boolean>;
  ngOnInit() {
    this.isLoggedIn$ = this.loginAuthService.isLoggedIn;
    //authenticationModel: AuthenticationModel;
  }

}
