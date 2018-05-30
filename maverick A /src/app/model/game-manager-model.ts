export class GameManager {
    gameId: number;
    gameImage: string;
    createdBy: string;
    createdOn: number;
    gameType: string;
    gameDescription: string;
    gameRules: string;
    gamePopularity: number;
    questionLevels: {
        gqLevelId: number;
        easyLevel: number;
        mediumLevel: number;
        advancedLevel: number;
    }
    questionTime: {
        gqTimeId: number;
        easyQuestionsTime: number;
        mediumQuestionsTime: number;
        advanceQuestionsTime: number;
    }
    questionScore: {
        gqScoreId: number;
        easyQuestionsScore: number;
        mediumQuestionsScore: number;
        advanceQuestionsScore: number;
    }
    topic: {
        topicId: number,
        topicName: string,
        topicImage: string,
        questions: {
            questionId: number;
            questionLevel: string;
            questionStem: string;
            option1: string;
            option2: string;
            option3: string;
            option4: string;
            correctAnswer: string;
            user: {
                userId: number,
                userName: string
            }
        }
    }

}