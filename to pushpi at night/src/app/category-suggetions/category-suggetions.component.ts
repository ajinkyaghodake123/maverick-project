import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {cModel } from '../model/c';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'sn-category-suggetions',
  templateUrl: './category-suggetions.component.html',
  styleUrls: ['./category-suggetions.component.scss']
})
export class CategorySuggetionsComponent implements OnInit {
  public selectedCategoriesList:cModel[]=[];
  public allCategoriesList:Array<string>
  i=0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { 
    this.i=0;
  }
  id;
  ngOnInit() {
    this.route.params.subscribe(params => {
     this.id = params["id"];
     console.log("uid in catsuggetion===>"+this.id);
   })
   this.getAllCategories();
 }

  options = ['OptionA', 'OptionB', 'OptionC'];


  updateCheckedOptions(option1,event) {
    console.log("options===>"+Array.of(option1));
    this.selectedCategoriesList[this.i++]=option1;    //storing all the selected casategories
    console.log("list=="+Array.of(this.selectedCategoriesList))
    // this.sendCategories(this.selectedCategoriesList);
  }
  sendCategories(){
    var resultArray:Array<any>=[] //empty array which we are going to push our selected items, always define types 
    console.log("catlist====>"+this.selectedCategoriesList);
    this.userService.sendSelectedCategories(this.id,this.selectedCategoriesList)
    .subscribe(data => {
      this.allCategoriesList=data;
      console.log("selected categories ===="+data);
    });
 
  }
 
optionsChecked = [];


  selectedCategories(){
  // alert("selected categories are stored..please login to continue");
    this.sendCategories();
    this.router.navigate(['/home']);
  }
  getAllCategories(){
    console.log("getting all categories===");
   // this.userService.getAllCategories();
    this.userService.getAllCategories()
    .subscribe(data => {
      this.allCategoriesList=data;
      console.log("categories from backend====",data);
    });
  }

}
