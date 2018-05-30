export class GameManager{
    gameId: number;
    createdBy: string;
    createdOn: number;
    gameName: string;
    categoryName: string;
    gameType: string;
    gameDescription:string;
    gameRules:string;
    gamePopularity:string;
    questionLevels:{
        gqLevelId:number;
        easyLevel:number;
        mediumLevel:number;
        advancedLevel:number;
    }
    questionTime:{
        gqTimeId:number;
        easyQuestionsTime:number;
        mediumQuestionsTime:number;
        advanceQuestionsTime:number;
    }
    questionScore:{
        gqScoreId:number;
        easyQuestionsScore:number;
        mediumQuestionsScore:number;
        advanceQuestionsScore:number;
    }
    questions:{
        questionId:number;
        questionLevel:string;
        questionStem:string;
        option1:string;
        option2:string;
        option3:string;
        option4:string;
        correctAnswer:string;
    }
}