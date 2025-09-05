import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-req',
  templateUrl: './show-req.component.html',
  styleUrls: ['./show-req.component.css']
})
export class ShowReqComponent {
  reqData:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get("http://localhost:3000/allRequests")
    .subscribe((data:any)=>{
      this.reqData=data;
      console.log("Data received from backend ",this.reqData);
    })
  }
}
