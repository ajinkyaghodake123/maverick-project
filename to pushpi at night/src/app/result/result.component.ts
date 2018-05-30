import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: any;
 percent: any;
  constructor(private quizService: QuizService, private router: Router) { }
  ngOnInit() {
     if (parseInt(sessionStorage.getItem('qnProgress')) == this.quizService.qns[1].totalQuestions) {
      this.quizService.seconds = parseInt(sessionStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(sessionStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(sessionStorage.getItem('qns'));
      
      this.asses();
      this.OnSubmit();
          }
        }   
         
  asses() {
    this.quizService.correctAnswerCount = 0;
      this.quizService.qns.forEach((e, i) => {
             if (e.answer == e.cAns){
                this.quizService.correctAnswerCount++;
               }
              });
    this.score = ((this.quizService.correctAnswerCount)/this.quizService.qns[1].totalQuestions)*100;
    this.percent = Math.round(this.score);
    console.log(this.percent);
  }
   
  OnSubmit() {
        
    this.quizService.result(this.quizService.qns).subscribe((data: any) =>{
       console.log("result sent");
    });
  }
  restart() {
   
     sessionStorage.setItem('qnProgress',"0");
     sessionStorage.setItem('qns',"");
     sessionStorage.setItem('seconds',"0");
     this.router.navigate(['/play']);
  }
}