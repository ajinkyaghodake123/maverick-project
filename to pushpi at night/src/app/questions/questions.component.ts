import { Component, OnInit, Inject } from "@angular/core";
import { QuestionGen } from "../model/questionGen";
import { QuestionService } from "../services/questionservice.service";
import { Router, RouterStateSnapshot } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  topicName: string;
  categoryId: number;
  questionGen: QuestionGen[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private questionService: QuestionService
  ) {
    const snapshot: RouterStateSnapshot = router.routerState.snapshot;
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService
      .getQuestions(this.categoryId, this.topicName)
      .subscribe(questionGen => (this.questionGen = questionGen));
  }


  generate(){
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService.autoquestions(this.categoryId, this.topicName).subscribe(questionGen => (this.questionGen = questionGen));
  }

  goBack() {
    this.location.back();
  }
}