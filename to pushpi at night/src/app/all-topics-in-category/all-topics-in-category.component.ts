import { Component, OnInit, Inject } from "@angular/core";
import { QuestionGen } from "../model/questionGen";
import { QuestionService } from "../services/questionservice.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-all-topics-in-category",
  templateUrl: "./all-topics-in-category.component.html",
  styleUrls: ["./all-topics-in-category.component.css"]
})
export class AllTopicsInCategoryComponent implements OnInit {
  categoryId: number;
  questionGen: QuestionGen[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params.categoryId;
    });
    this.questionService.getTopics(this.categoryId).subscribe(questionGen => {
      this.questionGen = questionGen;
    });
  }
  
  goBack() {
    this.location.back();
  }
}
