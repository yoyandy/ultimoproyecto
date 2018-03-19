import { Component, OnInit } from '@angular/core';
import {ComentarioService} from '../services//comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor(
    private comService: ComentarioService
  ) {}
  comment = {};
  user = {};
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  saveComentario() {
    this.comment['user'] = this.user;
    this.comService.addComentario(this.comment)
    .subscribe(res => {
      console.log(res)
    });
  }

}

