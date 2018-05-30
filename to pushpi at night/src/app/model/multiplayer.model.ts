export class MultiGame {
  gameId: number;
  gameName: string;
  gameImage: string;
  createdBy: string;
  createdOn: number;
  gameType: {
    gameTypeId: number;
    gameTypeName: string;
    gameTypeDescription: string;
  };
  gameDescription: string;
  gameRules: string;
  userId: number;
  categoryId: number;
  numberOfQuestions: number;
  timePerQuestion: number;
  scorePerQuestion: number;
  
  
  questionLevels: {
  
    easyLevel: number;
    mediumLevel: number;
    advancedLevel: number;
  };
  // questionTime: {
  
  //   easyQuestionsTime: number;
  //   mediumQuestionsTime: number;
  //   advanceQuestionsTime: number;
  // };
  // questionScore: {
   
  //   easyQuestionsScore: number;
  //   mediumQuestionsScore: number;
  //   advanceQuestionsScore: number;
  // };
  topic: {
    topicId: number;
    topicName: string;
    topicImage: string;
    questions: {
      questionId: number;
      questionLevel: string;
      questionStem: string;
      questionType: string;
      option1: string;
      option2: string;
      option3: string;
      option4: string;
      correctAnswer: string;
      user: {
        userId: number;
        userName: string;
      };
    };
  };

  autoquestions: {
    questionId: number;
    questionLevel: string;
    questionStem: string;
    questionType: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correctAnswer: string;
    user: {
      userId: number;
      userName: string;
    };
  };
}
