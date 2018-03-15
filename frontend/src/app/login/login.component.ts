import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: SessionService,
    private router: Router
  ) { }

  user = {};

  login() {
    this.service.login(this.user)
    .subscribe(res => {
      this.router.navigate(['users']);
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user')){
      this.router.navigate(['users']);
    }
  }

}
