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
     
 
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialog2(): void {
    let dialogRef = this.dialog.open(RegDialogComponent,  {
      width: '427px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {

    setTimeout(() => this.openDialog()
  ,20)}
}