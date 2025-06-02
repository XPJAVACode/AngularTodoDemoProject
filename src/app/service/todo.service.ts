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
    const params = new HttpParams();
    params.set('userId', userId);

    return (this.http.get(appTodoUrl+"getAll/"+name,{params}));
  }

  deleteTodo(todoId: BigInt): Observable<any>{
    return this.http.delete(appTodoUrl+todoId);
  }
}
