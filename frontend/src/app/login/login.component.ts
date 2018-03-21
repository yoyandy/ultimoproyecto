import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formInfo = {
    email: '',
    password: ''
  };
  constructor(
    private service: SessionService,
    private router: Router
  ) { }

  sendForm() {
    this.service.login(this.formInfo.email,this.formInfo.password)
    .subscribe(resp => this.router.navigate(['comentario']));
  }


  ngOnInit() {
  }

}
