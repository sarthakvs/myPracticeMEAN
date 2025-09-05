import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-req-form',
  templateUrl: './req-form.component.html',
  styleUrls: ['./req-form.component.css']
})
export class ReqFormComponent {
  //{ename,ltype,sdate,edate}
  constructor(private httpClient: HttpClient){

  }
  post(formData:any){
    this.httpClient.post("http://localhost:3000/addRequest",formData)
    .subscribe((data:any)=>{

    })
  }
}
