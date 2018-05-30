import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from '.././model/UserProfile';
import { UserUpdate } from '.././model/UserProfileUpdate';

@Injectable()
export class UserProfileService {

  private getByIdUrl = "http://172.23.238.166:8080/api/v1/getUser/{id}";
  // private deleteByIdUrl = "http://localhost:8080/api/v1/deleteUser";
  private updateByIdUrl = "http://172.23.238.166:8080/api/v1/updateUser/{id}";

  constructor(private http: HttpClient) { }

  getById(userId: number): Observable<User[]> {
    return this.http.get<User[]>('http://172.23.238.166:8080/api/v1/getUser/' + userId);
  }

  // getById(userId: number) {
  //   return this.http.get('http://172.23.239.189:8080/api/v1/getUser/' + userId).map((res: Response) => {
  //     console.log("inside service ");
  //     return res.json();
  //   });
  // }

  public updateUser(user: UserUpdate): Observable<UserUpdate> {
    alert(user.userName);
    const id = user.userId;
    return this.http.put<UserUpdate>('http://172.23.238.166:8080/api/v1/updateUser/' + id, user);
  }
}