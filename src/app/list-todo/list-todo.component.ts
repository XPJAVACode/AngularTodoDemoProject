import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit{
 //http://localhost:4200/todo/Suman?id=edsdwofeehwfieohcefnsfhhhefajo
  todos:any;
  userId:string="";
  name: string = "";
  deleteMessage: string="";
  constructor(private activateRoute: ActivatedRoute, private todoService: TodoService){}

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(queryParams=>{
      this.userId = queryParams['id'];
    });
    this.activateRoute.params.subscribe(pathParams=>{
      this.name = pathParams['name'];
    });
    this.todoService.getAllTodos(this.userId, this.name).subscribe({
      next: (successResponse)=>{
        console.log(successResponse); //for our confirmation
        this.todos = successResponse;
      },
      error: (error)=>{
        console.error(error);
      }
    });
  }

 deleteTodo(id: BigInt): void{
   //delete a todo
   this.todoService.deleteTodo(id).subscribe({
    next: (res)=>{
      this.todos.splice(this.todos.indexOf(id), 1);
      this.deleteMessage = "todo has been deleted";
    }
   });
 }

 updateTodo(id: BigInt) : void{
  //todo update
 }

 addTodo(){
  
 }
}
