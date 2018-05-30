import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

// import 
//importing Restaurant model class
import { LoginUser } from "../loginUser.model";
import { AuthenticationModel } from "../authentication.model"

//Define headers content type  
const httpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable()
export class LoginUserService {
  api;
  user: LoginUser;
  authenticationModel: AuthenticationModel;

  constructor(private http: HttpClient) { }

  public registerUser(user): Observable<LoginUser> {
    // return this.http.post<LoginUser>(
    //   "http://172.23.238.181:8080/api/q1/addUser",
    //   user
    // );
    return this.http.post<LoginUser>(
      "http://172.23.239.197:8080/api/q1/addUser",
      user
    );
  }
  public loginUser(authenticationModel): Observable<AuthenticationModel> {
    // return this.http.post<AuthenticationModel>(
    //   "http://172.23.238.181:8080/api/q1/auth",
    //   authenticationModel
    // );
    return this.http.post<AuthenticationModel>(
      "http://172.23.239.197:8080/api/q1/auth",
      authenticationModel
    );
  }

}