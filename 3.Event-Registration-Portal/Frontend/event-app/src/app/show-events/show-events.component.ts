import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent {
  eventData:any;
  constructor(private httpClient:HttpClient){

  }
  ngOnInit(){
    this.httpClient.get("http://localhost:3000/getEvents")
    .subscribe((data:any)=>{
      this.eventData=data;
      console.log("DATA RECEIVED FROM BACKEND ",this.eventData);
    })
  }
}
