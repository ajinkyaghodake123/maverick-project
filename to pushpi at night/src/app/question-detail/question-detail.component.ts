import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { QuestionGen } from "../model/questionGen";
import { QuestionService } from "../services/questionservice.service";

@Component({
  selector: 'sn-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  categoryId: number;
  topicName: string;
  questionId: number;
  questionGen: QuestionGen;
  question: QuestionGen[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
      this.questionId = params.questionId;
    });
    this.questionService.getQuestionById(this.categoryId, this.topicName, this.questionId)
      .subscribe(questionGen => (this.questionGen = questionGen));
  }

  delete(questionGen: QuestionGen){
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService.deleteQuestion(this.categoryId, this.topicName, this.questionId, questionGen)
        .subscribe(() => this.goBack());
  }

  save(questionGen: QuestionGen){
    this.route.queryParams.subscribe(params => {
      this.categoryId= params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService.updateQuestion(this.categoryId, this.topicName, this.questionId, questionGen)
        .subscribe(() => this.goBack);
  }

  goBack(){
    this.location.back();
  }

}
