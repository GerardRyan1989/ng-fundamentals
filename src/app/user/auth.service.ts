import {forwardRef, Inject, Injectable} from '@angular/core';
import { IUser  } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) {

  }

  currentUser: IUser;
  /* tslint:disable:no-string-literal */
  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password };
    const options = { headers: new HttpHeaders({'content-type': 'application/json'})};
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
      this.currentUser = data['user'] as IUser;
    }))
      .pipe(catchError(err => {
      return of(false);
    }));

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
      this.http.get('/api/currentIdentity').pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = data as IUser;
        }
      })).subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({'content-type': 'application/json'})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;
    const options = { headers: new HttpHeaders({'content-type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }



}
