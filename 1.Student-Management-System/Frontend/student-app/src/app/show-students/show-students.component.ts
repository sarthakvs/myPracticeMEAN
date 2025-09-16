import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent {
  studentsData:any;
  paginatedData:any;
  currPage:number=1;
  limit:number=1;
  totalPages:number=1;
  constructor(private http:HttpClient){

  }
  setPage(num:number){
    this.currPage=num;
    const start = (num-1) * this.limit;
    const end = start + this.limit;
    this.paginatedData = this.studentsData.slice(start,end);
  }

  ngOnInit(){
    this.http.get("http://localhost:3000/getStudents").subscribe((data:any)=>{
      this.studentsData=data;
      this.setPage(1);
      this.totalPages=Math.ceil(this.studentsData.length/this.limit);
      console.log("Data received from backend: ", this.studentsData);
    })
  }

}
