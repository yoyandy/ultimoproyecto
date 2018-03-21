import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  constructor(private http: Http, private router: Router) { }
  BASE_URL = 'http://localhost:3000/api';

  signup(formSignup) {
    return this.http.post(`${this.BASE_URL}/signup`, formSignup)
    .map(res => res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }

  login(username, password) {
    return this.http.post(`${this.BASE_URL}/login`, {email: username, password: password}, {withCredentials: true})
    .map(res => res.json())
    .map(receivedUser => {
      localStorage.setItem('user', JSON.stringify(receivedUser));
      return receivedUser;
    })
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
  });
  }

  loggedin() {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
    .map(res => res.json())
    .catch(e => {
      return Observable.throw(e.json().message);
    });
  }

  canActivate(): Observable <any> {
    return this.http.get(`${this.BASE_URL}/loggedin`, {withCredentials: true})
      .map(res => {
        if (res) {
          return true;
        } else {
          this.router.navigate(['']);
          return false;
        }
      })
      .catch(e => {
        return Observable.throw(e.json().message);
      });
  }

  getUsers() {
    return this.http.get(`http://localhost:3000/api/auth/users`, {withCredentials: true})
    .map(res => res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }

logout() {
  return this.http.post(`${this.BASE_URL}/logout`, {withCredentials: true})
  .map(res => res.json())
  .catch (e => {
        return Observable.throw(e.json().message);
  });
}
}
