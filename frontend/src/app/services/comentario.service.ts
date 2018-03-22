import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ComentarioService {

  constructor(private http: Http) { }
    BASE_URL = 'http://localhost:3000';

getAllComentarios() {
  return this.http.get(`${this.BASE_URL}/api/comentarios`)
  .map(res => res.json());
}

  fetchComentario(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/comentarios`)
    .map((res: Response) => res.json())
    .map(comentario => comentario)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  addComentario(comentario): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/comentarios`, comentario)
    .map((res: Response) => res.json())
    .map(function(respuesta) {
    return respuesta;
  });

}
}
