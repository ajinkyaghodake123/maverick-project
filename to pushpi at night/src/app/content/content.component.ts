import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { log } from 'util';
import { Subscription } from "rxjs/Subscription";
import { RecommendationService } from "../recommendation.service";
export const UserId=1;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute,private recommendationService: RecommendationService) {}

  // title: String = 'Home';
  sub: Subscription;
  userId;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId = params["userId"];
      console.log(this.userId);
      //this.UserId=this.userId;
      this.recommendationService.setUserId(this.userId);
      console.log("capital U"+UserId);
    });

    // const title = this.route.snapshot.paramMap.get('title');
    // this.title = title;


    // this.route.paramMap.subscribe( (params) => {
    //   console.log(`params : ${JSON.stringify(params)}`);
    //   this.title = params.get('title');
    // });

    // .pipe(switchMap((params: ParamMap) => {
    //   // (+) before `params.get()` turns the string into a number
    //   console.log(`params : ${params}`);

    // }));
  }
  
}
