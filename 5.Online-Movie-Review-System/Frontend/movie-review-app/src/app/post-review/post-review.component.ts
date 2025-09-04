import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent {

  constructor(private httpclient:HttpClient){

  }
  add(formdata:any){
    if (formdata.rrating < 0 || formdata.rrating > 5) {
      alert("⚠️ Rating must be between 1 and 5!");
      return;
    }
    this.httpclient.post("http://localhost:3000/addReview",formdata)
    .subscribe((data:any)=>{});
  }
}
