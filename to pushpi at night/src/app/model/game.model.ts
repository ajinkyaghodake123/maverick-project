export class Game {
  gameId: number;
  gameName: string;
  gameImage: string;
  createdBy: string;
  createdOn: Date;
  gameType: {
    gameTypeId: number;
    gameTypeName: string;
    gameTypeDescription: string;
  };
  gameDescription: string;
  gameRules: string;
 

  userId: number;

  questionLevels: {
    easyLevel: number;
    mediumLevel: number;
    advancedLevel: number;
  };

  questionTime: {
    easyQuestionsTime: number;
    mediumQuestionsTime: number;
    advanceQuestionsTime: number;
  };

  questionScore: {
    easyQuestionsScore: number;
    mediumQuestionsScore: number;
    advanceQuestionsScore: number;
  };
  topic: {
    topicId: number;
    topicName: string;
    topicImage: string;
    questions: [
      {
        questionId: number;
        questionLevel: string;
        questionStem: string;
        option1: string;
        option2: string;
        option3: string;
        option4: string;
        correctAnswer: string;
        user: {
          userId: number;
          userName: string;
        };
      }
    ];
  };

  questions: [{}];
}
