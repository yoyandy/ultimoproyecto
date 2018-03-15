import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  comentarios: Array<any>;
  constructor(
    private comentarioService: ComentarioService
  ) { }

  ngOnInit() {
    this.comentarioService.fetchComentario()
    .subscribe (comentarios => this.comentarios = comentarios);
  }

}
