import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-rotuing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { HttpInterceptorService } from './service/http/http-interceptor.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListTodoComponent,
    FooterComponent,
    WelcomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
