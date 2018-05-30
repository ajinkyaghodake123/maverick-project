import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { UserService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-administartion',
  templateUrl: './administartion.component.html',
  styleUrls: ['./administartion.component.scss']
})
export class AdministartionComponent implements OnInit {

  constructor(
    private quizService:QuizService,
    private userService: UserService,
    private router: Router
  ) { }
  

  ngOnInit() {
  }
  grafna(){
  console.log("aftre btn click in grafna()");
    window.open("http://172.23.238.182:3000/?orgId=1", "_blank");
  }
}

