import { Component, OnInit, Inject, Input, NgModule } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { UserProfileService } from '../../services/user-profile.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from '../../model/UserProfile';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sn-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

 uId:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient, 
    private userService: UserProfileService,
  ) { }
  ngOnInit() {
//  this.route.params.subscribe(params => {
//   this.uId = +params['userId'];
// });

    this.getUserById(1);
    //this.adduser();
  }

  u = this.userService.getById;
 
  @Input() showMePartially: boolean;

  showVar: boolean = !true;
  toggleChild1() {
    this.showVar = !this.showVar;
  }
  user: User[][];
 testUser:any;
  getUserById(userId) {
    //console.log("skfihwieorjewporpew===========",this.u);
    this.userService.getById(userId).subscribe(data => {
      this.user = Array.of(data);
      this.testUser=data;
      console.log("test data==="+this.testUser);
    });
   // this.adduser();
  }
// adduser(){
//   console.log("Iside Add User")
// this.userService.addUser(this.testUser).subscribe(data =>{
// console.log("data added========");
// });
}


  // public show: boolean = false;
  // public buttonName: any = 'Update Profile';


  // toggle() {
  //   this.show = !this.show;
  //   if (this.show)
  //     this.buttonName = "Hide";
  //   else
  //     this.buttonName = "Show";
  // }


