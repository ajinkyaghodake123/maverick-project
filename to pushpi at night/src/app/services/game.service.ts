import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Game } from "../model/game.model";
import { MultiGame } from "../model/multiplayer.model";


const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
};
@Injectable()
export class GameService {
  url = "http://172.23.238.185:8080/api/game/";
  url1 = "http://172.23.238.185:8080/api/game/category/mp";
  game: Game;
  categoryId: number;
  topicName: string;
  constructor(private http: HttpClient) { }

  public displayGame<Game>() {
    return this.http.get("http://172.23.238.185:8080/api/game/games");
    // return this.http.get("url/games");

    //   // this.data1=Array.of(restaurants);
  }

  public createGame(categoryId: number, topicName: string, game): Observable<Game> {
    console.log("Passing data to the gameManager backend ", game);
    // return this.http.post<Game>(this.url + "category/${categoryId}/${topicName}", game);
    const getUrl = `${this.url}/${categoryId}/${topicName}`;
    return this.http.post<Game>(getUrl, game);
  }

  public createMultiGame(categoryId: number, topicName: string, multigame): Observable<MultiGame> {
    // return this.http.post<Game>(this.url + "category/mp/${categoryId}/${topicName}", game);
    const getUrl = `${this.url1}/${categoryId}/${topicName}`;
    return this.http.post<MultiGame>(getUrl, multigame)
  }

  public saveGame(game): Observable<Game> {
    return this.http.post<Game>("http://172.23.238.185:8080/api/game/games", game);
  }
}
