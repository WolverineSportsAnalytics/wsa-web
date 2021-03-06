import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CommonDataService } from '../shared/services/common-data.service';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpHeaders = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  private currentUser: User;

  constructor(private http: HttpClient, private wsaCommonService: CommonDataService) {
    this.currentUser = null;
  }

  private globalUser = {
    username: 'wsa',
    password: 'LeBron>MJ!'
  };

  loginUser(userName: string, password: string) {
    // set current user to logged in user
    const loginInfo = { username: userName, password: password };

    this.currentUser = {
      username: loginInfo.username,
      password: loginInfo.password,
    };

    if ((this.currentUser.username == this.globalUser.username) && (this.currentUser.password == this.globalUser.password)) {
      // server will do authentication
      return new Observable(observer => {
        observer.next(true);
        observer.complete();

        // unsubscribe function doesn't need to do anything in this
        // because values are delivered synchronously
        return {unsubscribe() {}};
      });
    } else {
      // server will do authentication
      return new Observable(observer => {
        observer.next(false);
        observer.complete();

        // unsubscribe function doesn't need to do anything in this
        // because values are delivered synchronously
        return {unsubscribe() {}};
      });
    }
  }

  isAuthenticated() {
    return (!(!this.currentUser));
  }

  getUser() {
    return this.currentUser;
  }
}
