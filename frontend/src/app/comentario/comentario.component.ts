import { Component, OnInit } from '@angular/core';
import {ComentarioService} from '../services//comentario.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor(
    private comService: ComentarioService,
    private sessionService: SessionService,
  ) { }
  comment = {};
  user = {};

  loggedin() {
    this.sessionService.loggedin();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loggedin();
    localStorage.getItem('user') ? this.user = localStorage.getItem('user') : this.user = undefined;
  }

  saveComentario() {
    this.comment['user'] = this.user;
    this.comService.addComentario(this.comment)
    .subscribe(res => {
      alert('Tu historia se está analizando, en breve nos pondremos en contacto contigo.');
      this.comment = {};
      console.log(res);
    });
  }

}

