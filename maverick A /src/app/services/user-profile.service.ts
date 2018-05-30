import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { User } from '.././model/UserProfile';
import { UserUpdate } from '.././model/UserProfileUpdate';

@Injectable()
export class UserProfileService {

//   private getAllUrl = "http://172.23.238.181:8080/api/q1/getAll";

//   constructor(private http: HttpClient) { }

//   getById(id:String): Observable<User[]>

// {

//       return this.http.get<User[]>('http://172.23.238.181:8080/api/q1/getUser/'+id);

// }

//   getAll(){

//     console.log("get All Method From Angular");

//       return this.http.get(this.getAllUrl);

//   }

private getByIdUrl = "http://172.23.238.166:8080/api/v1//getUser/{id}";
// private deleteByIdUrl = "http://localhost:8080/api/v1/deleteUser";
private updateByIdUrl = "http://172.23.238.166:8080/api/v1/updateUser/{id}";

constructor(private http: HttpClient) { }

getById(userId: number): Observable<User[]> {
 // alert('kucjhh bhi ');
 console.log("userid000000000"+userId)
  return this.http.get<User[]>('http://172.23.238.181:8080/api/q1/getUser/' + userId);
}

public updateUser(user: UserUpdate) : Observable<UserUpdate> {
  alert(user.userName);
const id = user.userId;
   // var id = parseInt("user.userId");
  return this.http.put<UserUpdate>('http://172.23.238.166:8080/api/v1/updateUser/'+id, user);
}
// public addUser(user: UserUpdate) : Observable<any> {
// //   alert(user.userName);
// // const id = user.userId;
//    // var id = parseInt("user.userId");
//   return this.http.post<any>('http://172.23.238.166:8080/api/v1/updateUser/', user);
// }

}