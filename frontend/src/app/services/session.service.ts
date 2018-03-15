import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }
  BASE_URL = 'http://localhost:3000/api';

  signUp(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user)
    .map(res => res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user, {withCredentials: true})
    .map(res => {
      res.json();
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
  });
  }

  getUsers() {
    return this.http.get(`http://localhost:3000/api/auth/users`, {withCredentials: true})
    .map(res => res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e)
    });
  }

}