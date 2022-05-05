import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { Home2Component } from './home/home2/home2.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { CreatetaskComponent } from './task/createtask/createtask.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: ListTaskComponent,
    pathMatch: 'full'
  },
  {
path: 'task',
component: ListTaskComponent,
  },
  {
  path: 'login',
  component: LoginComponent,
  

  },
  {
  path: 'signup',
  component: SignupComponent,
  

  },
  {
    path:'home2',
    component:Home2Component,
    canActivate:[AuthGuard]
    
  },
  {
    path:'comprar',
    component:ComprarComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'create',
    component:CreatetaskComponent,
    canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
