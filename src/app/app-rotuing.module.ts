import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ListTodoComponent } from "./list-todo/list-todo.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'listTodo', component: ListTodoComponent},
    {path: '**', component:LoginComponent} //This needs to be replaced with an error component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}