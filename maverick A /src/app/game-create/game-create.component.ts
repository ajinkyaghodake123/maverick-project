import { Component, OnInit, Inject } from "@angular/core";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Router } from "@angular/router";

import { RegDialogComponent } from "../reg-dialog/reg-dialog.component";

import { empty } from "rxjs/Observer";

import { GameManager } from "../model/game-manager-model"

import { GameManagerService } from "../services/game-manager.service";

import { MultiplayerPopupComponent } from "../multiplayer-popup/multiplayer-popup.component";
import { ActivatedRoute } from "@angular/router";
import {Location } from "@angular/common";
@Component({
  selector: 'sn-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  constructor(
    private location: Location,
    public dialog: MatDialog,
    private router: ActivatedRoute,
    private gameService: GameManagerService
  ) { }
goBack()
{
  this.location.back();
}
numberOfEasyQuestions: number;
  numberOfMediumQuestions: number;
  numberOfHardQuestions: number;
  gameLevelId: number;
  totalScoreOfEasyQuestions: number;
  totalScoreOfMediumQuestions: number;
  totalScoreOfHardQuestions: number;
  gameScoreId: number;
  totalTimeForEasyQuestions: number;
  totalTimeForMediumQuestions: number;
  totalTimeForHardQuestions: number;
  gameTimeId: number;
  gameId: number;
  gameImage: String;
  createdBy: String;
  createdOn: String;
  gameType: String;
  gameDescription: String;
  gameRules: String;
  gamePopularity: number;
  games: GameManager[];

  openDialog(): void {
    let dialogRef = this.dialog.open(RegDialogComponent, {
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openMultiDialog(): void {
    let dialogRef = this.dialog.open(MultiplayerPopupComponent, {
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  gameMode: string;
  gameValue(hi: string) {
    this.gameMode = hi;
  }

  game;
  categoryId: number;
  topicName: string;

  add() {
    let games = {
      gameId: this.gameId,
      gameImage: this.gameImage,
      createdBy: this.createdBy,
      createdOn: this.createdOn,
      gameType: this.gameType,
      gameDescription: this.gameDescription,
      gameRules: this.gameRules,
      gamePopularity: this.gamePopularity,
      gameQuestionLevel: [{
        numberOfEasyQuestions: `${this.numberOfEasyQuestions}`,
        numberOfMediumQuestions: `${this.numberOfMediumQuestions}`,
        numberOfHardQuestions: this.numberOfHardQuestions,
        gameLevelId: this.gameLevelId,
      }],
      gameQuestionScore: [{
        totalScoreOfEasyQuestions: `${this.totalScoreOfEasyQuestions}`,
        totalScoreOfMediumQuestions: `${this.totalScoreOfMediumQuestions}`,
        totalScoreOfHardQuestions: this.totalScoreOfHardQuestions,
        gameScoreId: this.gameScoreId,
      }],
      gameQuestionTime: [{
        totalTimeForEasyQuestions: `${this.totalTimeForEasyQuestions}`,
        totalTimeForMediumQuestions: `${this.totalTimeForMediumQuestions}`,
        totalTimeForHardQuestions: this.totalTimeForHardQuestions,
        gameTimeId: this.gameTimeId,
      }]
    };
    this.router.queryParams.subscribe(params => {
      this.categoryId = params.categoryId;
      this.topicName = params.topicName;
    });
    this.gameService.createGame(this.categoryId, this.topicName, games)
      .subscribe(game => {
        this.game = game;
      });
  }
  ngOnInit() { }
}
