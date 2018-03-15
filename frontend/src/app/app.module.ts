import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { EntradaComponent } from './entrada/entrada.component';
// import { ServiceComponent } from './services/service/service.component';

// services
import {ComentarioService} from './services/comentario.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ComentarioComponent,
    EntradaComponent,
    // ServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Http
  ],
  providers: [ComentarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
