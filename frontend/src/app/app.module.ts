import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PublishstoryComponent } from './publishstory/publishstory.component';


const routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entrada', component: EntradaComponent},
  {path: 'comentario', component: ComentarioComponent, canActivate: [SessionService]},
  {path: 'about', component: AboutComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'publishstory', component: PublishstoryComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ComentarioComponent,
    EntradaComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactoComponent,
    PublishstoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ComentarioService, SessionService],
  bootstrap: [AppComponent],
})

export class AppModule { }
