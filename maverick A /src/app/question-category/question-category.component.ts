import { Component, OnInit, Inject } from "@angular/core";

import { QuestionService } from "../services/questionservice.service";
import { Router } from "@angular/router";
import { empty } from "rxjs/Observer";
import { QuestionGen } from "../model/questionGen";

@Component({
  selector: 'sn-question-category',
  templateUrl: './question-category.component.html',
  styleUrls: ['./question-category.component.scss']
})
export class QuestionCategoryComponent implements OnInit {

  categories: QuestionGen[];

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.questionService
      .getCategories()
      .subscribe(data => (this.categories = data));
  }

}
