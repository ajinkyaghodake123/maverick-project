// import { Component, OnInit, Inject, Input, NgModule } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { FormsModule } from '@angular/forms';
// import { NgModel } from '@angular/forms';

// import { UserProfileService } from '../services/user-profile.service';
// import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
// //import { User } from '../model/User';

// @Component({
//   selector: 'app-user',
//   templateUrl: './profile-user.component.html',
//   styleUrls: ['./profile-user.component.css']
// })
// export class UserComponent implements OnInit {
//   constructor(private http: HttpClient,
//      private userService: UserProfileService) {

//   }
//   ngOnInit() {

//     this.getUserById(1);
//   }

//   @Input() showMePartially: boolean;

//   showVar: boolean = !true;
//   toggleChild1() {
//     this.showVar = !this.showVar;
//   }
//   user: User[][];

//   data: any;
//   dd: any;

//   //@Input() user: User;


//   getUserById(id) {
//     this.userService.getById(id).subscribe(data => {
//       console.log("user id:", data);
//       this.user = Array.of(data);
//       console.log("dfksd", data);
//     });
//   }


//   getAllUsers() {
//     this.userService.getAll().subscribe(data => {
//       console.log(data);
//     });
//   }


//   // gamesPlayedTotal = 67; //result and all will be here
//   // gamesWon = 4;
//   // gamesDefeat = 33;
//   // gamesDraw = 32;

//   // gamesPlayedThisDay = 0;
//   // gamesPlayedThisWeek = 2;
//   // gamesPlayedThisMonth = 10;
//   // gamesPlayedThisyear = 55;

//   // favoriteGames = 4;
//   // favoriteGamesList = ['favorite1', 'favorite2', 'favorite3', 'favorite4'];
//   // gameMostPlayed1 = "Game ONE Most played";
//   // gameMostPlayed2 = "Game TWO Most played";
//   // gameMostPlayed3 = "Game THREE Most played";

//   // //=====================================S T A T I S T I C S===================================================

//   // statistics = "throughout statistics";

//   // aa = 'any';


// }
