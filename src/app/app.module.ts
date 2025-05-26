import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-rotuing.module';
import {HttpClientModule} from '@angular/common/http';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
