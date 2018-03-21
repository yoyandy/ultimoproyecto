import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../services/comentario.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-publishstory',
  templateUrl: './publishstory.component.html',
  styleUrls: ['./publishstory.component.css']
})
export class PublishstoryComponent implements OnInit {
comentList: Array<Object>;
  constructor( private coment: ComentarioService,
    private session: SessionService) { }

  ngOnInit() {
    this.coment.getAllComentarios()
    .subscribe(res => this.comentList = res);
  }

}
