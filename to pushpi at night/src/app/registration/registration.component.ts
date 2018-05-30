import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { RegDialogComponent } from "../reg-dialog/reg-dialog.component";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  color: string;
  user: User = new User();
  userName;
  password;
  email;
  location;
  mobile;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit() {
  }
  availableRegisterColors = [
    { name: 'Register', color: 'accent' },
  ];
  regiseterUser(user: User) {
    console.log("reg name=======" + this.user.userName);
    this.userService.registerUser(user)
      .subscribe(data => {
        alert("user created successfully");
        if (this.user.email != null && this.user.password != null) {
          this.router.navigate(['/login']);
        }
      });
  }
}