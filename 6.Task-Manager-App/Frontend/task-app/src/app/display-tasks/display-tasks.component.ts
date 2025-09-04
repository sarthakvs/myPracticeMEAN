import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent {
  tasksData:any;
  constructor(private httpclient:HttpClient){
  }
  ngOnInit(){
    this.httpclient.get("http://localhost:3000/allTasks")
    .subscribe(data=>{
      this.tasksData=data;
      console.log("Tasks Data received: "+ this.tasksData);
    })
  }
}
