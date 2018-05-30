import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { User } from '../../model/UserProfile';
import { UserUpdate } from '../../model/UserProfileUpdate';
import { Location } from "@angular/common";

@Component({
  selector: 'sn-userupdateprofile',
  templateUrl: './userupdateprofile.component.html',
  styleUrls: ['./userupdateprofile.component.scss']
})
export class UserupdateprofileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location,
    private router: Router, private userService: UserProfileService) { }
  user: User[][];
  sub: Subscription;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"];
      if (id) {
        this.userService.getById(id).subscribe(data => {
          this.user = Array.of(data);
        });
      }
    });
  }
  updateUser(user: UserUpdate): void {
    this.userService.updateUser(user).subscribe(data =>{
    alert("User Updated");
    });
  }


  public show:boolean = false;
  public buttonName:any = 'update Profile';
  
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  goBack(){
    
    this.location.back();
  }

}
