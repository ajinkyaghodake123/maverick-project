import { Options } from "selenium-webdriver/chrome";

export class QuestionGen {
  categoryId: number;
  categoryName: String;
  categoryImage: String;
  topic: [
    {
      topicId: number;
      topicName: String;
      topicImage: String;
      questions: [
        {
          questionId: number;
          questionLevel: number;
          questionStem: String;
          Option1: String;
          Option2: String;
          Option3: String;
          Option4: String;
          correctAnswer: String;
          user: [
            {
              userId: number;
              userName: String;
            }
          ];
        }
      ];
    }
  ];
}
