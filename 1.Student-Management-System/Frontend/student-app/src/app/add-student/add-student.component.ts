import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  departments=[
    'Computer Science',
    'Electronics',
    'IT',
    'AIML',
    'AIDS',
    'Civil',
    'Mechanical'
  ]
  constructor(private httpClient:HttpClient){

  }
  add(formdata:any){
    this.httpClient.post("http://localhost:3000/postStudent",formdata)
    .subscribe({
      next:(data:any)=>{
        alert("Student added successfully");
      },
      error:(err)=>{
        alert("Unable to add to the Database "+err.message);
        }
    });
  }
}
