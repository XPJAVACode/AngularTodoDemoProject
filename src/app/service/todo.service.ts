import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare const appTodoUrl:string;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(userId:string, name: string): Observable<any>{
    return (this.http.get(appTodoUrl+"getAll/"+name,{params:{userId:userId}}));
  }

  deleteTodo(todoId: string): Observable<any>{
    return this.http.delete(appTodoUrl+todoId);
  }

  getATodo(todoId: string): Observable<any>{
    return this.http.get(appTodoUrl+'getTodo/'+todoId);
  }

  updateTodo(id: string, objTodo: any){
    return (this.http.put(appTodoUrl+'updateATodo/'+id, JSON.stringify(objTodo), {headers : {'Content-Type': 'application/json'}}));
  }

  createTodo(objTodo: any){
    return (this.http.post(appTodoUrl+'createTodo', JSON.stringify(objTodo), {headers : {'Content-Type': 'application/json'}}));
  }
}
