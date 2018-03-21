import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../services/comentario.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  user: any;

  comentarios: Array<any>;
  constructor(
    private comentarioService: ComentarioService,
    private sessionService: SessionService,
  ) { }

  logout() {
    this.sessionService.logout();
    localStorage.clear();
    location.reload();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.comentarioService.fetchComentario()
    .subscribe (comentarios => this.comentarios = comentarios);
  }

}
