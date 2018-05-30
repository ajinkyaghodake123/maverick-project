import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { cModel } from '../model/cat';
// import 
//importing Restaurant model class
import { User } from "../model/user.model";
import { AuthenticationModel } from "../model/authentication.model"

//Define headers content type  
const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable()
export class UserService {
  userId;
  api;
  user: User;
  authenticationModel: AuthenticationModel;
  constructor(private http: HttpClient) { }
  public registerUser(user): Observable<User> {
    // return this.http.post<User>(
    //   "http://172.23.238.181:8080/api/q1/addUser",
    //   user
    // );
    return this.http.post<User>(
      "http://172.23.239.197:8080/api/q1/addUser",
      user
    );

  }
  public registerprofileUser(user): Observable<User> {
    // return this.http.post<User>(
    //   "http://172.23.238.181:8088/api/v1/addUser",
    //   user
    // );
    return this.http.post<User>(
      "http://172.23.239.197:8088/api/v1/addUser",
      user
    );
  }
  public loginUser(authenticationModel): Observable<AuthenticationModel> {
    // return this.http.post<AuthenticationModel>(
    //   //"http://172.23.238.181:8080/api/q1/auth",
    //   "http://172.23.238.181:8090/auth/api/q1/auth",
    //   authenticationModel
    // );
    return this.http.post<AuthenticationModel>(
      //"http://172.23.238.181:8080/api/q1/auth",
      "http://172.23.239.197:8090/auth/api/q1/auth",
      authenticationModel
    );
  }
  public logoutUser(userEmail): Observable<any> {
    // return this.http.post<string>(
    //   "http://172.23.238.181:8080/api/q1/logout",
    //   userEmail
    // );
    return this.http.post<string>(
      "http://172.23.239.197:8080/api/q1/logout",
      userEmail
    );
  }
  public getAllCategories(): Observable<any> {
    // return this.http.get(
    //   "http://172.23.238.181:8080/api/q1/getallCategories",
    // );
    return this.http.get(
      "http://172.23.239.197:8080/api/q1/getallCategories",
    );
  }
  public sendSelectedCategories(id, selectedCategoriesList): Observable<any> {
  //   return this.http.post(
  //     "http://172.23.238.181:8080/api/q1/addSelectedCategories/" + id, selectedCategoriesList);
  // }
  return this.http.post(
    "http://172.23.239.197:8080/api/q1/addSelectedCategories/" + id, selectedCategoriesList);
}
  public getUserByEmail(email): Observable<User> {
    console.log("inside getuserbyid service");
   // return this.http.get<User>(
    //   "http://172.23.238.181:8080/api/q1/getUserByEmail/" + email
    // );}
    return this.http.get<User>(
      "http://172.23.239.197:8080/api/q1/getUserByEmail/" + email
    );
  }
  grafna() {
    return this.http.get("http://172.23.238.182:3000/?orgId=1");
    // return this.http.get("http://172.23.239.197:3000/?orgId=1");
  }
    produceUserId(id){
      this.userId=id;
      //return this.http.get("http://172.23.238.181:8080/api/q1/produceUserId/"+id);
      return this.http.get("http://172.23.239.177:8080/api/q1/produceUserId/"+id);
    }
    getUserId()
    {
      return this.userId;
    }  
  }
