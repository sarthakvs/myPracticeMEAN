import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  constructor(private httpclient:HttpClient){

  }
  add(formdata:any){
    this.httpclient.post("http://localhost:3000/addTasks",formdata)
    .subscribe(data=>{

    });
  }
}
