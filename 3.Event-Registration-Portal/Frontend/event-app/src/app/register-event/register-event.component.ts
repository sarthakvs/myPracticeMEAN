import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent {
  constructor(private httpClient:HttpClient){

  }
  register(formdata:any){
    var userDate = new Date(formdata.edate);
    var currDate = new Date();
    if(userDate<currDate){
      alert("Enter a future date!");
      return;
    }
    if(!formdata.ename){
      alert("Enter the Event Name");
      return;
    }
    if(!formdata.uname){
      alert("Enter your Username");
      return;
    }
    this.httpClient.post("http://localhost:3000/postEvent",formdata)
    .subscribe((data:any)=>{

    })
  }
}
