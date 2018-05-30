import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from './services/user.service';
@Injectable()
export class RecommendationService {
 
  public API = 'http://172.23.239.204:8084/api/v1/recommendation/categories';
  userId:number;
  constructor(private http: HttpClient,private router: Router, private userService: UserService) {
    this.userId=this.userService.getUserId();
    console.log("value ====="+this.userService.getUserId());
  }
  getAll(): Observable<any> {
    console.log(this.API+'/'+this.userId);
    return this.http.get(this.API+'/'+this.userId);
  }
  get(id: string) {
    console.log("9999999999999"+this.userId)
    console.log('http://172.23.239.204:8084/api/v1/recommendation/categoryTopics' + this.userId +'/' + id);
    return this.http.get('http://172.23.239.204:8084/api/v1/recommendation/categoryGames' +'/' + id);
  }
  getAllGames(): Observable<any> {
    return this.http.get('http://172.23.239.204:8084/api/v1/recommendation/games'+'/181');
  }
  sendGameIdToSingleplayerEngine(id,game_type,game_type_id,topic_id): Observable<any>
  {
    console.log('http://172.23.239.177:8081/api/v1/details' + '/' + game_type_id +'/'+this.userId+'/'+id);
    return this.http.get('http://172.23.239.177:8081/api/v1/details' + '/'+game_type_id+'/'+this.userId+'/'+id);
  }
  sendGameIdToMultiplayerEngine(id,game_type,game_type_id,topic_id): Observable<any>
  {
    console.log('http://172.23.239.177:8080/api/v1/details' + '/' + game_type_id +'/' + this.userId);
    return this.http.get('http://172.23.239.204:8080/api/v1/details' + '/'+game_type_id+'/'+this.userId);
  }
  sendGameIdToAdaptiveEngine(id,game_type,game_type_id,topic_id): Observable<any>
  {
    console.log('http://172.23.239.177:8080/api/v1/details' + '/' + game_type_id +'/' + this.userId);
    return this.http.get('http://172.23.239.177:8080/api/v1/details' + '/'+game_type_id+'/'+this.userId);
  }

  setUserId(userId)
  {
     this.userId=userId;
  }
  getUserId()
  {
    return this.userId;
  }
  sendCar(name)
  {
    this.router.navigate(['/game-by-categoryId',name, this.userId])
  }
}
