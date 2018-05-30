import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router, Data } from "@angular/router";
import { RegDialogComponent } from "../reg-dialog/reg-dialog.component";
import { empty } from "rxjs/Observer";
import { GameManager } from "../model/game-manager-model"
import { GameService } from "../services/game.service";
import { MultiplayerPopupComponent } from "../multiplayer-popup/multiplayer-popup.component";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Game } from "../model/game.model";
import { MultiGame } from "../model/multiplayer.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AdvancedModeComponent } from "../advanced-mode/advanced-mode.component";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'sn-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  gameData: any = [];
  games: Game[];
  multiGames: MultiGame[];
  game;
  filteredGameData: Array<String> = [];

  multiPlayerIsDisabled = true;
  singlePlayerIsDisabled = true;
  selectedGameType;

  selectedFile: File = null;
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {

    this.http.post('http://172.23.239.205:8080/api/game/category/mp/3/capitals', this.selectedFile, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
      });
  }

  // All fields in the html file
  easyLevel: number;
  mediumLevel: number;
  advancedLevel: number;
  gameLevelId: number;

  easyQuestionsScore: number;
  mediumQuestionsScore: number;
  advanceQuestionsScore: number;
  gameScoreId: number;

  easyQuestionsTime: number;
  mediumQuestionsTime: number;
  advanceQuestionsTime: number;

  gameTimeId: number;
  timePerQuestion: number;
  scorePerQuestion: number;

  gameId: number;
  gameName: string;
  gameImage: string;
  createdBy: string;
  createdOn: Data;
  gameTypeId: number;
  gameTypeName: string;
  gameTypeDescription: string;
  gameDescription: String;
  gameRules: String;
  gameMode: string;
  userId: number;
  userName: string;

  //for multiplayer
  categoryId: number;

  topicId: number;
  topicName: string;
  topicImage: string;
  numberOfQuestions: number;
  questionId: number;
  questionStem: string;
  questionLevel: number;
  questionType: string;

  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private gameService: GameService,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit() { }

  setGameType() {
    this.multiPlayerIsDisabled = false;
    this.singlePlayerIsDisabled = true;
  }

  setSingleType() {
    this.singlePlayerIsDisabled = false;
    this.multiPlayerIsDisabled = true;
  }

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

  openInfoDialog(): void {
    let dialogRef = this.dialog.open(AdvancedModeComponent, {
      width: "350px",
      height: "350px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  // This is for showing only if multiplayer
  gameValue(hi: string) {
    this.gameMode = hi;
  }

  add() {
    let games = {
      gameId: this.gameId,
      gameName: this.gameName,
      gameImage: this.gameImage,
      createdBy: this.createdBy,
      createdOn: this.createdOn,
      gameType: {
        gameTypeId: this.gameTypeId,
        gameTypeName: this.gameTypeName,
        gameTypeDescription: this.gameTypeDescription
      },
      gameDescription: this.gameDescription,
      gameRules: this.gameRules,

      questionLevels: {
        easyLevel: this.easyLevel,
        mediumLevel: this.mediumLevel,
        advancedLevel: this.advancedLevel
      },
      questionScore: {
        easyQuestionsScore: this.easyQuestionsScore,
        mediumQuestionsScore: this.mediumQuestionsScore,
        advanceQuestionsScore: this.advanceQuestionsScore
      },
      questionTime: {
        easyQuestionsTime: this.easyQuestionsTime,
        mediumQuestionsScore: this.mediumQuestionsTime,
        advanceQuestionsScore: this.advanceQuestionsTime
      },
      topic: {
        topicId: this.topicId,
        topicName: this.topicName,
        topicImage: this.topicImage,
        questions: [
          {
            questionId: this.questionId,
            questionStem: this.questionStem,
            questionLevel: this.questionLevel,
            questionType: this.questionType,
            option1: this.option1,
            option2: this.option2,
            option3: this.option3,
            option4: this.option4,
            correctAnswer: this.correctAnswer,
            user: [
              {
                userId: this.userId,
                userName: this.userName
              }
            ]
          }
        ]
      },
      questions: [
        {
          questionId: this.questionId,
          questionStem: this.questionStem,
          questionLevel: this.questionLevel,
          questionType: this.questionType,
          option1: this.option1,
          option2: this.option2,
          option3: this.option3,
          option4: this.option4,
          correctAnswer: this.correctAnswer
        }
      ]
    };
    console.log("add", games);
    this.gameService.createGame(this.categoryId, this.topicName, games).subscribe(data => {
      console.log("coming data is ", data);
    });
  }

  addMultiGame() {
    let multiGames = {

      gameId: this.gameId,
      gameName: this.gameName,
      gameImage: this.gameImage,
      createdBy: this.createdBy,
      createdOn: this.createdOn,
      gameType: {
        gameTypeId: this.gameTypeId,
        gameTypeName: this.gameTypeName,
        gameTypeDescription: this.gameTypeDescription
      },
      gameDescription: this.gameDescription,
      gameRules: this.gameRules,
      userId: this.userId,
      categoryId: this.categoryId,
      numberOfQuestions: this.numberOfQuestions,
      timePerQuestion: this.timePerQuestion,
      scorePerQuestion: this.scorePerQuestion,
      topic: {
        topicId: this.topicId,
        topicName: this.topicName,
        topicImage: this.topicImage,
        questions: [{
          questionId: this.questionId,
          questionLevel: this.questionLevel,
          questionStem: this.questionStem,
          questionType: this.questionType,
          option1: this.option1,
          option2: this.option2,
          option3: this.option3,
          option4: this.option4,
          correctAnswer: this.correctAnswer,
          user: [{
            userId: this.userId,
            userName: this.userName,
          }],
        }]
      },
      autoquestions: [{
        questionId: this.questionId,
        questionLevel: this.questionLevel,
        questionStem: this.questionStem,
        questionType: this.questionType,
        option1: this.option1,
        option2: this.option2,
        option3: this.option3,
        option4: this.option4,
        correctAnswer: this.correctAnswer,
        user: [{
          userId: this.userId,
          userName: this.userName
        }],
      }]

    }
    console.log("add", multiGames);
    this.gameService.createMultiGame(this.categoryId, this.topicName, multiGames).subscribe(data => {
      console.log("multiplayer coming data is ", data);
    });


  }

  goBack(){
    this.location.back();
  }

  openSnackBar() {
    this.snackBar.open("Game Created", "", {
      duration: 2000,
    });
  }
}