import { Injectable } from '@angular/core';
import {Task} from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks:Task[]=[];
  private idCounter = 1;
  getTasks(){
    return this.tasks;
  }
  addTask(title:string,priority:string){
    const newTask:Task = {
      id:this.idCounter++,
      taskName:title,
      priority:priority,
      status:false
    };
    this.tasks.push(newTask);
  }
  toggleTask(todoid:number){
    const todo=this.tasks.find(t=>t.id===todoid);
    if(todo) todo.status=!todo.status;
  }
}
