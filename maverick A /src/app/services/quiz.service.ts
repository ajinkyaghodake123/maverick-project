import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://172.23.238.182:8080';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number ;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds % 60);
  }




  //---------------- Http Methods---------------


  getQuestions() {
    return this.http.get(this.rootUrl + '/api/v1/getdata');
  }

  getAnswers() {
    var body = this.qns.map(x => x.qId);
    console.log(body);
    return this.http.post(this.rootUrl + '/api/v1/answers', body);
  }

  grafna() {
    console.log("before hitting grafna api==")
    return this.http.get("http://172.23.238.182:3000");
    
  }
  result(data: any[]) {
    console.log(data);
    return this.http.post(this.rootUrl + '/api/v1/result', data);
   }


}