import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ListTodoComponent } from "./list-todo/list-todo.component";
import { WelcomeComponent } from "./welcome/welcome/welcome.component";
import { TodoComponent } from "./todo/todo.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path:'login', component:LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent},
    {path: 'todos/:name', component: ListTodoComponent},
    {path: 'todo/:id', component: TodoComponent},
    {path: 'register', component: RegistrationComponent}, 
    {path: '**', component:LoginComponent} //This needs to be replaced with an error component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}