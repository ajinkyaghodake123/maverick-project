import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { UserService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(
    private quizService:QuizService,
    private userService: UserService,
    private router: Router
  ) { }
  

  ngOnInit() {
  }
  grafna(){
    window.open("http://172.23.238.182:3000/?orgId=1", "_blank");
  }
}

