import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';

const routes: Routes = [
  {path:'add',component:AddTodoComponent},
  {path:'view',component:ViewTodoComponent},
  {path:'',redirectTo:'view',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingModule=[AddTodoComponent,ViewTodoComponent]
