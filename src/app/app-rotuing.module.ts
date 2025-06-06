import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ListTodoComponent } from "./list-todo/list-todo.component";
import { WelcomeComponent } from "./welcome/welcome/welcome.component";
import { TodoComponent } from "./todo/todo.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ErrorComponent } from "./error/error.component";
import { authGuard } from "./service/guard/route-guard.service";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path:'login', component:LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent, canActivate:[authGuard]},
    {path: 'todos/:name', component: ListTodoComponent, canActivate:[authGuard]},
    {path: 'todo/:id', component: TodoComponent, canActivate:[authGuard]},
    {path: 'register', component: RegistrationComponent}, 
    {path: 'logout', component:LogoutComponent},
    {path: '**', component:ErrorComponent} //This needs to be replaced with an error component
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}