import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  //http://localhost:4200/todo/2
  todoId:any;
  todoObject:any={"name":"", "description":"", "targetDate": new Date()};
  buttonName="Add";
  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.todoId = data['id'];
    });
    if(this.todoId != -1){
      this.todoService.getATodo(this.todoId).subscribe({
        next: (successReposne)=>{
          this.todoObject = successReposne;
          this.buttonName = "Update";
        },
        error: (error)=>{
          console.error(error);
        }
      });
    }
  }

  saveTodo(form:NgForm){
    console.log(form);
      if(this.todoId != -1){
        this.todoService.updateTodo(this.todoId, this.todoObject).subscribe({});
      }else{
        this.todoService.createTodo(this.todoObject).subscribe({});
      }
  }
}
