import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QuestionGen } from "../model/questionGen";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  url = "http://172.23.238.165:8080/api/v1/question-generator/category";
  // url = "http://172.23.239.179:8080/api/v1/question-generator/category";

  getCategories(): Observable<QuestionGen[]> {
    return this.http.get<QuestionGen[]>(this.url);
  }

  addTopic(categoryId: number, questionGen): Observable<QuestionGen[]> {
    const getUrl = `${this.url}/${categoryId}/topics`;
    return this.http.put<QuestionGen[]>(getUrl, questionGen);
  }

  getTopics(categoryId: number): Observable<QuestionGen[]> {
    const getUrl = `${this.url}/${categoryId}/topics`;
    return this.http.get<QuestionGen[]>(getUrl);
  }

  addQuestion(
    categoryId: number,
    topicName: string,
    questionGen
  ): Observable<QuestionGen[]> {
    const getUrl = `${this.url}/${categoryId}/${topicName}/questions`;
    return this.http.put<QuestionGen[]>(getUrl, questionGen);
  }

  getQuestions(categoryId: number, topicName: string): Observable<QuestionGen[]> {
    const getUrl = `${this.url}/${categoryId}/${topicName}/questions`;
    return this.http.get<QuestionGen[]>(getUrl);
  }

  getQuestionById(categoryId: number, topicName: string, questionId: number): Observable<QuestionGen> {
    const getUrl = `${this.url}/${categoryId}/${topicName}/${questionId}`;
    return this.http.get<QuestionGen>(getUrl);
  }

  updateQuestion(categoryId: number, topicName: string, questionId: number, questionGen: QuestionGen): Observable<QuestionGen>{
    const getUrl = `${this.url}/${categoryId}/${topicName}/${questionId}`;
    return this.http.put<QuestionGen>(getUrl,questionGen);
  }

  deleteQuestion(categoryId: number, topicName:string, questionId: number, questionGen): Observable<QuestionGen> {
    const getUrl = `${this.url}/${categoryId}/${topicName}/${questionId}`;
    return this.http.delete<QuestionGen>(getUrl);
  }

  autoquestions(categoryId: number, topicName: string): Observable<QuestionGen[]>{
    const getUrl = `${this.url}/${categoryId}/${topicName}/auto-questions`;
    return this.http.get<QuestionGen[]>(getUrl);
  }
}
