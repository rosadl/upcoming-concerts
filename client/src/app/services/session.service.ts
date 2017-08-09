import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export interface User {
  _id: string,
  username: string,
  admin: boolean,
  updated_at: Date,
  created_at: Date
}

@Injectable()
export class SessionService {
  user: User; // The current logged in user
  startLoginCompleted: boolean = false;
  BASE_URL: string = `${environment.BASE_URL}/api/auth`;
  options: object = { withCredentials: true };

  constructor(private http: Http, private router : Router) {
    this.isLoggedIn().subscribe((user: User) => {
      console.log(`Welcome again user ${user.username}`)
      this.user = user;
      this.startLoginCompleted = true;
    }, e => this.startLoginCompleted = true);
  }

  handleError(e) {
    console.error("Error en la llamada a la API");
    return Observable.throw(e.json().message);
  }

  signup(username: string, password: string, admin: boolean): Observable<User> {
    return this.http.post(`${this.BASE_URL}/signup`, { username, password, admin }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post(`${this.BASE_URL}/login`, { username, password }, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }

  logout(): Observable<object> {
    return this.http.get(`${this.BASE_URL}/logout`, this.options)
      .map(res => {
        res.json();
        this.user = undefined;
      })
      .catch(this.handleError);
  }

  isLoggedIn(): Observable<User> {
    return this.http.get(`${this.BASE_URL}/loggedin`, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }

  getPrivateData(): Observable<object> {
    return this.http.get(`${this.BASE_URL}/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
