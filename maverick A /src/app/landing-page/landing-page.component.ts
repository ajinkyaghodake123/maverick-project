import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { LoginUserService } from '../services/login-user.service';
import { Router } from "@angular/router";
import { RegDialogComponent } from '../reg-dialog/reg-dialog.component';
import { CategorySuggetionsComponent } from '../category-suggetions/category-suggetions.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  {

  title = 'app';
  color: string;

  constructor(
    public dialog: MatDialog,
  ) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      //width: '270px',
      width: '427px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  openDialog2(): void {
    let dialogRef = this.dialog.open(RegDialogComponent, {
      //width: '600px',
      width: '427px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

ngOnInit() {

  setTimeout(() => this.openDialog()
,20)}
}