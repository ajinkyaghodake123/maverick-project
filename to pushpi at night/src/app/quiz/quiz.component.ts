import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { RecommendationService } from "../recommendation.service";
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  subscribe: any;
  source: any;

  constructor(private router: Router, private quizService: QuizService,private recommendationService: RecommendationService) { }

  ngOnInit() {
    this.fetchData();
    const source = timer(1000);
    const subscribe = source.subscribe(val =>
       this.fetchData()
    );
  }


fetchData() {
  clearInterval(this.source);
  this.quizService.seconds = 10;
    this.quizService.qnProgress = 0;
    this.quizService.getQuestions().subscribe(
      (data: any) => {
        this.quizService.qns = data;
        this.startTimer();
      }
    );
} 

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds--;
      if(this.quizService.seconds<1){
        this.time();
      }
        if(this.quizService.qnProgress == this.quizService.qns[1].totalQuestions){
          this.Complete();
        }
      
      sessionStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  Answer(qId, choice) {
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    sessionStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.time();
    sessionStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.qns[1].totalQuestions) {
      this.Complete();
    }
  }

   time() {
     if(this.quizService.qns[this.quizService.qnProgress].questionLevel == 1){
    this.quizService.seconds=10;
    this.quizService.qnProgress++;
    
     }
     else if(this.quizService.qns[this.quizService.qnProgress].questionLevel == 2){
      this.quizService.seconds=15;
      this.quizService.qnProgress++;
        
       }
      else {
        this.quizService.seconds=20;
        this.quizService.qnProgress++;
      }
   }

  Complete() {
    clearInterval(this.quizService.timer);
    this.router.navigate(['/result']);
  }


}