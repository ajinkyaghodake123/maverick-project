import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { QuestionGen } from "../model/questionGen";
import { QuestionService } from "../services/questionservice.service";

@Component({
  selector: 'sn-topic-dialog',
  templateUrl: './topic-dialog.component.html',
  styleUrls: ['./topic-dialog.component.scss']
})
export class TopicDialogComponent implements OnInit {

  questionGen;
  categoryId: number;
  topicId: number;
  topicName: string;
  topicImage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location) {}

  ngOnInit() {
  }

  onSubmit() {
    let question = {
      topic: [
        {
          topicId: `${this.topicId}`,
          topicName: `${this.topicName}`,
          topicImage: this.topicImage
        }
      ]
    };
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params.categoryId;
    });
    this.questionService
      .addTopic(this.categoryId, question)
      .subscribe(questionGen => {
        this.questionGen = questionGen
      });
  }

  goBack(){
    this.location.back();
  }

}
