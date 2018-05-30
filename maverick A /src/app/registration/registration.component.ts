import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(RegDialogComponent, {
  //     width: '250px',
  //     // data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //    // this.animal = result;
  //   });
  // }

  ngOnInit() {
  }
  availableRegisterColors = [
    
    { name: 'Register', color: 'accent' },
   
  ];

  // createRestaurants(restaurant: Restaurant){
  //   console.log("jhjhjjhhjjhjh"+restaurant);
  //   this.restaurantService
  //     .createRestaurants(restaurant)
  //     .subscribe(data => {
  //       alert("User created successfully.");
  //     });
  // }
  // add(id: number, name: string, image: string, location: string){
  //   this.heroService.addHero({ name, id, image, location } as Hero)
  //     .subscribe(hero => { this.heroes.push(hero), alert("restaurant added successfully")});
  // }
  //regiseterUser(name:string,password:string,email:string,location:string,mobile:string):void{
    regiseterUser(user: User){  
  console.log("reg name======="+this.user.userName);
    // this.user.user(name,password,email,location,mobile);
    this.userService.registerUser( user)
    .subscribe(data => {

      alert("user created successfully");
      if (this.user.email != null && this.user.password != null){
        this.router.navigate(['/login']);
      } 
    });
  }

}

