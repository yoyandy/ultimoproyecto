import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: SessionService,
    private router: Router
  ) { }
  newUser = {};

  signUp() {
    this.service.signUp(this.newUser)
    .subscribe(user => {
      this.router.navigate(['login']);
    });
  }

  ngOnInit() {
  }

}
