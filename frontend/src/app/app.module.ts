import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



// services
import {ComentarioService} from './services/comentario.service';
import {EntradaService} from './services/entrada.service';
import {SessionService} from './services/session.service';

const routes = [
  {path: '', component: AppComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ComentarioComponent,
    EntradaComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ComentarioService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
