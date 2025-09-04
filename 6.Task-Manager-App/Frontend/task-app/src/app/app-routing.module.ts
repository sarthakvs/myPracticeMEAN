import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';

const routes: Routes = [
  {path:"",redirectTo:"displayTasks",pathMatch:"full"},
  {path:"addTask",component:TaskFormComponent},
  {path:"displayTasks",component:DisplayTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
